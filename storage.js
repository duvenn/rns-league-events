// Drop-in replacement for the Claude-artifact `window.storage` API so the
// same app logic works as a normal deployed site.
//
// If VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set (see README.md),
// data is shared across everyone who visits the site — that's what real
// league use needs, since handlers and players are on different devices.
//
// If they're not set, data is saved to this browser's localStorage only,
// so the site still works for trying things out, but nobody else will see
// what you create.

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const REMOTE_ENABLED = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

const LOCAL_PREFIX = 'rns_league_kv:';

async function remoteGet(key) {
  const url = `${SUPABASE_URL}/rest/v1/kv_store?key=eq.${encodeURIComponent(key)}&select=value`;
  const res = await fetch(url, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
  });
  if (!res.ok) throw new Error('Fetch failed');
  const rows = await res.json();
  if (!rows.length) throw new Error('Not found');
  return { key, value: rows[0].value };
}

async function remoteSet(key, value) {
  const url = `${SUPABASE_URL}/rest/v1/kv_store?on_conflict=key`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'resolution=merge-duplicates,return=representation',
    },
    body: JSON.stringify({ key, value, updated_at: new Date().toISOString() }),
  });
  if (!res.ok) throw new Error('Save failed');
  return { key, value };
}

function localGet(key) {
  const raw = window.localStorage.getItem(LOCAL_PREFIX + key);
  if (raw === null) throw new Error('Not found');
  return { key, value: raw };
}

function localSet(key, value) {
  window.localStorage.setItem(LOCAL_PREFIX + key, value);
  return { key, value };
}

export const storage = {
  async get(key) {
    return REMOTE_ENABLED ? remoteGet(key) : localGet(key);
  },
  async set(key, value) {
    return REMOTE_ENABLED ? remoteSet(key, value) : localSet(key, value);
  },
};
