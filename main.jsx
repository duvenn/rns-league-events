const { useState, useEffect, useRef, useMemo } = React;

/* ============ ICONS ============
   Small hand-rolled icon set (same visual style as lucide) so this file has
   zero npm dependencies — everything runs straight off the CDN scripts in
   index.html, no build step. */
function IconBase({ children, size = 16, color = 'currentColor', style, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style} className={className}>
      {children}
    </svg>
  );
}
const Upload = (p) => <IconBase {...p}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></IconBase>;
const Camera = (p) => <IconBase {...p}><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></IconBase>;
const Check = (p) => <IconBase {...p}><polyline points="20 6 9 17 4 12" /></IconBase>;
const X = (p) => <IconBase {...p}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></IconBase>;
const Users = (p) => <IconBase {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></IconBase>;
const Trophy = (p) => <IconBase {...p}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></IconBase>;
const LogIn = (p) => <IconBase {...p}><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1="15" y1="12" x2="3" y2="12" /></IconBase>;
const LogOut = (p) => <IconBase {...p}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></IconBase>;
const ChevronRight = (p) => <IconBase {...p}><polyline points="9 18 15 12 9 6" /></IconBase>;
const ChevronLeft = (p) => <IconBase {...p}><polyline points="15 18 9 12 15 6" /></IconBase>;
const ChevronDown = (p) => <IconBase {...p}><polyline points="6 9 12 15 18 9" /></IconBase>;
const Plus = (p) => <IconBase {...p}><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></IconBase>;
const Calendar = (p) => <IconBase {...p}><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></IconBase>;
const MapPin = (p) => <IconBase {...p}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" /></IconBase>;
const Clock = (p) => <IconBase {...p}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></IconBase>;
const ArrowLeft = (p) => <IconBase {...p}><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></IconBase>;
const Loader2 = (p) => <IconBase {...p}><path d="M21 12a9 9 0 1 1-6.219-8.56" /></IconBase>;
const User = (p) => <IconBase {...p}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></IconBase>;
const AlertCircle = (p) => <IconBase {...p}><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></IconBase>;
const Trash2 = (p) => <IconBase {...p}><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /></IconBase>;
const Pencil = (p) => <IconBase {...p}><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /></IconBase>;
const RefreshCw = (p) => <IconBase {...p}><polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></IconBase>;
const Shuffle = (p) => <IconBase {...p}><polyline points="16 3 21 3 21 8" /><line x1="4" y1="20" x2="21" y2="3" /><polyline points="21 16 21 21 16 21" /><line x1="15" y1="15" x2="21" y2="21" /><line x1="4" y1="4" x2="9" y2="9" /></IconBase>;
const Lock = (p) => <IconBase {...p}><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></IconBase>;
const Eye = (p) => <IconBase {...p}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" /><circle cx="12" cy="12" r="3" /></IconBase>;
const EyeOff = (p) => <IconBase {...p}><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" /><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 11 7 11 7a13.16 13.16 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.526 13.526 0 0 0 1 12s4 7 11 7a9.74 9.74 0 0 0 5.39-1.61" /><line x1="2" y1="2" x2="22" y2="22" /></IconBase>;
const Target = (p) => <IconBase {...p}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></IconBase>;
const Zap = (p) => <IconBase {...p}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></IconBase>;
const Shield = (p) => <IconBase {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /></IconBase>;
const ShieldCheck = (p) => <IconBase {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></IconBase>;

/* ============ STORAGE ============
   Edit the two constants below to turn on shared storage (see README.md).
   Left blank, the site runs in demo mode: data saves to this browser only. */
const SUPABASE_URL = 'https://twgsmfndagkmlkzxwpjt.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_3N3PWes6c_DM6fuavBAjtQ_WkBtsfoS';
const REMOTE_ENABLED = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
const LOCAL_PREFIX = 'rns_league_kv:';

async function remoteGet(key) {
  const url = `${SUPABASE_URL}/rest/v1/kv_store?key=eq.${encodeURIComponent(key)}&select=value`;
  const res = await fetch(url, {
    headers: { apikey: SUPABASE_ANON_KEY },
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
      'Content-Type': 'application/json',
      Prefer: 'resolution=merge-duplicates,return=representation',
    },
    body: JSON.stringify({ key, value, updated_at: new Date().toISOString() }),
  });
  if (!res.ok) throw new Error('Save failed');
  return { key, value };
}
async function remoteRpc(fn, args) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${fn}`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_ANON_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(args),
  });
  if (!res.ok) throw new Error('Save failed');
  return true;
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
function localSignups() {
  try { return JSON.parse(localGet('signups').value) || []; } catch { return []; }
}
const storage = {
  async get(key) { return REMOTE_ENABLED ? remoteGet(key) : localGet(key); },
  async set(key, value) { return REMOTE_ENABLED ? remoteSet(key, value) : localSet(key, value); },
  /* Signups are the one thing lots of people write at the same time, so they
     don't go through set() — that rewrites the whole array from whatever this
     browser loaded on page open, which meant two players submitting from
     separately-loaded pages silently overwrote each other. These two go
     through Postgres functions that mutate the stored array in a single
     statement, so concurrent writers queue up instead of clobbering.
     Demo mode has one browser and no concurrency, so it just edits in place. */
  async appendSignup(signup) {
    if (!REMOTE_ENABLED) {
      localSet('signups', JSON.stringify([...localSignups(), signup]));
      return true;
    }
    return remoteRpc('append_signup', { new_signup: signup });
  },
  async updateSignupStatus(id, status) {
    if (!REMOTE_ENABLED) {
      localSet('signups', JSON.stringify(localSignups().map(s => (s.id === id ? { ...s, status } : s))));
      return true;
    }
    return remoteRpc('set_signup_status', { signup_id: id, new_status: status });
  },
};

/* ============ DESIGN TOKENS ============
   White court. The palette is deliberately cool — a blue-cast near-black and
   grey-blue fills — rather than the warm cream that white layouts default to,
   so the brand red stays the only warm thing on screen and reads as the accent
   everywhere it appears. Token names are inherited from the dark build so
   every component keeps working; only the values changed. */
const C = {
  ink: '#FFFFFF',            // page base
  inkSoft: '#EEF1F6',        // recessed fill (chalk)
  panel: '#FFFFFF',          // cards
  paint: '#14151C',          // primary text
  paintDim: '#616779',       // secondary text
  hardwood: 'rgba(20,21,28,0.16)', // court-line strokes
  hardwoodSoft: '#F2F5FA',   // chips, avatars, inset blocks
  rim: '#E5262C',            // brand red
  net: '#8A91A6',            // muted status
  foul: '#C4232E',           // pass / destructive
  line: 'rgba(20,21,28,0.11)',
  onRim: '#FFFFFF',          // text sitting on a red fill
  shadow: '0 1px 2px rgba(20,21,28,0.05), 0 8px 24px -12px rgba(20,21,28,0.18)',
};

/* ============ CONSTANTS ============ */
// Event handler accounts now live in Supabase (kv_store, key "handlers") as
// {username, passwordHash} pairs — no public sign-up, no plaintext passwords
// in this file. To add a handler, hash their password with hashPassword()
// below and insert it into that row, or ask Claude to do it.
const BUILD = 'build 2026-08-08f';
const STORAGE_KEYS = { EVENTS: 'events', SIGNUPS: 'signups', HANDLERS: 'handlers' };

async function hashPassword(username, password) {
  const enc = new TextEncoder();
  const data = enc.encode(`rns-league:${username.toLowerCase()}:${password}`);
  const digest = await window.crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2, '0')).join('');
}

const PLAYSTYLES = [
  { value: 'sharpshooter', label: 'Sharpshooter', desc: 'Lives beyond the arc', icon: Target },
  { value: 'slasher', label: 'Slasher', desc: 'Attacks the rim', icon: Zap },
  { value: 'playmaker', label: 'Playmaker', desc: 'Runs the offense', icon: Users },
  { value: 'lockdown', label: 'Lockdown Defender', desc: 'Shuts down the ball', icon: ShieldCheck },
  { value: 'post', label: 'Post Anchor', desc: 'Bullies the paint', icon: Shield },
  { value: 'twoway', label: 'Two-Way Glue Guy', desc: 'Does a bit of everything', icon: RefreshCw },
];

/* The built-in questions a handler can switch off per event. Everything reads
   `!== false` so events created before a toggle existed keep asking it. */
const SIGNUP_FIELDS = [
  { key: 'askPosition', label: 'Ask Position' },
  { key: 'askPlaystyle', label: 'Ask Playstyle' },
  { key: 'askPassing', label: 'Ask Passing' },
  { key: 'askComp', label: 'Ask Comp Experience' },
];
const POSITIONS = ['Point Guard', 'Shooting Guard', 'Small Forward', 'Power Forward', 'Center', 'Flex / Any'];

const PASSING_SCALE = [
  { value: 1, label: 'Iso-Heavy', desc: "I create my own shot" },
  { value: 2, label: 'Selective Passer', desc: "Pass when the lane's closed" },
  { value: 3, label: 'Reads The Floor', desc: 'Balanced scorer and passer' },
  { value: 4, label: 'Set-Up Specialist', desc: 'Looks to assist first' },
  { value: 5, label: 'Floor General', desc: 'Runs the offense' },
];

const COMP_LEVELS = [
  { value: 1, label: 'New To Comp', desc: 'Casual pickup games' },
  { value: 2, label: 'Some Scrims', desc: 'Played a few organized runs' },
  { value: 3, label: 'League Regular', desc: 'Active in leagues and tournaments' },
  { value: 4, label: 'Competitive Vet', desc: 'Ranked or competitive experience' },
];

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const TEAM_NAME_POOL = [
  'Rim Runners', 'Paint Patrol', 'Downtown Snipers', 'Full Court Press',
  'Nothing But Net', 'Baseline Ballers', 'Fast Break Club', 'Iso Kings',
  'Glass Cleaners', 'Pick & Roll Crew', 'Zone Breakers', 'The Handlers',
  'Bucket Getters', 'Corner Threat', 'And-One Crew', 'Backdoor Cutters',
];

/* ============ UTILITIES ============ */
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 9);
}

function formatDateParts(dateStr) {
  if (!dateStr) return { day: '--', month: '---' };
  const d = new Date(dateStr + 'T00:00:00');
  if (isNaN(d)) return { day: '--', month: '---' };
  return {
    day: d.getDate(),
    month: d.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
  };
}

function formatTime(timeStr) {
  if (!timeStr) return '';
  const parts = timeStr.split(':');
  const h = Number(parts[0]);
  const m = Number(parts[1]);
  if (isNaN(h)) return timeStr;
  const period = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${String(m).padStart(2, '0')} ${period}`;
}

function resizeImageToThumb(file) {
  return new Promise((resolve, reject) => {
    if (!file.type || !file.type.startsWith('image/')) {
      reject(new Error("That file doesn't look like an image. Try a JPG or PNG."));
      return;
    }
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Could not read that file.'));
    reader.onload = (e) => {
      const img = new Image();
      img.onerror = () => reject(new Error('Could not load that image.'));
      img.onload = () => {
        const targetW = 640, targetH = 360;
        const targetRatio = targetW / targetH;
        const srcRatio = img.width / img.height;
        let sx, sy, sw, sh;
        if (srcRatio > targetRatio) {
          sh = img.height;
          sw = sh * targetRatio;
          sy = 0;
          sx = (img.width - sw) / 2;
        } else {
          sw = img.width;
          sh = sw / targetRatio;
          sx = 0;
          sy = (img.height - sh) / 2;
        }
        const canvas = document.createElement('canvas');
        canvas.width = targetW;
        canvas.height = targetH;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, sx, sy, sw, sh, 0, 0, targetW, targetH);
        resolve(canvas.toDataURL('image/jpeg', 0.6));
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

function computeScore(s) {
  const passing = s.passing || 3;
  const comp = s.comp || 1;
  return passing + comp;
}

function assignTeams(accepted, numTeamsInput) {
  const n = Math.min(Math.max(2, numTeamsInput || 2), Math.max(accepted.length, 2));
  const sorted = [...accepted].sort((a, b) => computeScore(b) - computeScore(a));
  const teams = Array.from({ length: n }, () => []);
  sorted.forEach((player, i) => {
    const round = Math.floor(i / n);
    const pos = i % n;
    const teamIndex = round % 2 === 0 ? pos : (n - 1 - pos);
    teams[teamIndex].push(player);
  });

  function teamScore(team) { return team.reduce((s, p) => s + computeScore(p), 0); }
  function metric(tms) {
    const totals = tms.map(teamScore);
    const scoreSpread = Math.max(...totals) - Math.min(...totals);
    const archetypeCounts = {};
    tms.forEach((team, ti) => {
      team.forEach(p => {
        const key = p.playstyle || 'none';
        if (!archetypeCounts[key]) archetypeCounts[key] = Array(tms.length).fill(0);
        archetypeCounts[key][ti]++;
      });
    });
    let archImbalance = 0;
    Object.values(archetypeCounts).forEach(counts => {
      archImbalance += Math.max(...counts) - Math.min(...counts);
    });
    return scoreSpread * 2 + archImbalance;
  }

  let bestMetric = metric(teams);
  for (let iter = 0; iter < 300; iter++) {
    const t1 = Math.floor(Math.random() * n);
    const t2 = Math.floor(Math.random() * n);
    if (t1 === t2 || teams[t1].length === 0 || teams[t2].length === 0) continue;
    const i1 = Math.floor(Math.random() * teams[t1].length);
    const i2 = Math.floor(Math.random() * teams[t2].length);
    const tmp = teams[t1][i1];
    teams[t1][i1] = teams[t2][i2];
    teams[t2][i2] = tmp;
    const m = metric(teams);
    if (m <= bestMetric) {
      bestMetric = m;
    } else {
      const tmp2 = teams[t1][i1];
      teams[t1][i1] = teams[t2][i2];
      teams[t2][i2] = tmp2;
    }
  }

  const shuffledNames = [...TEAM_NAME_POOL].sort(() => Math.random() - 0.5);
  return teams.map((team, i) => ({
    id: uid(),
    name: shuffledNames[i] || `Team ${i + 1}`,
    players: team.map(p => p.id),
    avgScore: team.length ? (teamScore(team) / team.length).toFixed(1) : '0.0',
  }));
}

function findTeamName(event, signupId) {
  if (!event || !event.teams) return null;
  const t = event.teams.find(t => t.players.includes(signupId));
  return t ? t.name : null;
}

/* A question is { id, text, type, choices[], followUps[] } where type is
   'text' | 'yesno' | 'choice', and each follow-up is
   { onAnswer, text, type, choices[] } — so a specific answer, not just Yes,
   can open a specific next question (pick a team, then pick from that team's
   players). Earlier builds stored questions as plain strings, and later ones
   as a single `followUp` object that only fired on Yes/No. Both are folded
   into the current shape on read, so old events keep working untouched. */
function normalizeQuestions(questions) {
  return (questions || []).map((q, i) => {
    if (typeof q === 'string') {
      return { id: 'q' + i, text: q, type: 'text', choices: [], followUps: [], legacyIndex: i };
    }
    const { followUp, followUps, ...rest } = q;
    const list = Array.isArray(followUps) ? followUps : (followUp ? [followUp] : []);
    return {
      ...rest,
      type: q.type || 'text',
      choices: Array.isArray(q.choices) ? q.choices : [],
      unique: !!q.unique,
      followUps: list.filter(Boolean).map(f => ({
        onAnswer: f.onAnswer,
        text: f.text,
        type: f.type || 'text',
        unique: !!f.unique,
        choices: Array.isArray(f.choices) ? f.choices : [],
      })),
      legacyIndex: i,
    };
  });
}

/* Flattens an event's handler questions + a signup's answers into one ordered
   list, resolving whichever follow-up the player's answer triggered. Pass
   includeUnanswered to keep skipped questions in the list (the detail view
   shows them, the summary row doesn't). */
function buildAnswers(data, questions, includeUnanswered = false) {
  const list = normalizeQuestions(questions);
  const raw = (data && data.customAnswers) || {};
  const positional = Array.isArray(raw); // legacy signups
  const filled = (v) => v !== undefined && v !== null && String(v).trim() !== '';
  const pretty = (v) => (v === 'yes' ? 'Yes' : v === 'no' ? 'No' : v);
  const out = [];
  list.forEach(q => {
    const answer = positional ? raw[q.legacyIndex] : raw[q.id];
    const answered = filled(answer);
    if (answered || includeUnanswered) {
      out.push({ key: q.id, text: q.text, a: answered ? pretty(answer) : null, answered });
    }
    const triggered = answered && q.followUps.find(f => f.onAnswer === answer);
    if (triggered) {
      const fAnswer = positional ? undefined : raw[q.id + '_followup'];
      const fAnswered = filled(fAnswer);
      if (fAnswered || includeUnanswered) {
        out.push({ key: q.id + '_followup', text: triggered.text, a: fAnswered ? pretty(fAnswer) : null, answered: fAnswered, followUp: true });
      }
    }
  });
  return out;
}

function formatSubmitted(iso) {
  if (!iso) return null;
  const d = new Date(iso);
  if (isNaN(d)) return null;
  return d.toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' });
}

/* ============ GLOBAL STYLES ============ */
function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Anton&family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');
      .font-display { font-family: 'Anton', sans-serif; }
      .font-body { font-family: 'Manrope', sans-serif; }
      .font-mono2 { font-family: 'JetBrains Mono', monospace; }
      *:focus-visible { outline: 2px solid #E5262C; outline-offset: 2px; }
      body { background: #FFFFFF; color: #14151C; }

      /* ---- ambient court -------------------------------------------------
         The one place this design spends its boldness: a fixed field behind
         everything, made of two slow colour washes and the geometry of a
         basketball court drifting across it. On white it reads like a gym
         floor seen through frosted glass. Everything else stays quiet. */
      .court-field { position: fixed; inset: 0; z-index: 0; pointer-events: none; overflow: hidden; }
      .wash { position: absolute; border-radius: 50%; filter: blur(90px); will-change: transform; }
      .wash-a { width: 46vmax; height: 46vmax; top: -14vmax; left: -10vmax;
                background: radial-gradient(circle, rgba(229,38,44,0.16), rgba(229,38,44,0) 70%);
                animation: driftA 34s ease-in-out infinite; }
      .wash-b { width: 40vmax; height: 40vmax; bottom: -16vmax; right: -8vmax;
                background: radial-gradient(circle, rgba(78,102,168,0.15), rgba(78,102,168,0) 70%);
                animation: driftB 44s ease-in-out infinite; }
      .wash-c { width: 30vmax; height: 30vmax; top: 38%; left: 42%;
                background: radial-gradient(circle, rgba(232,132,60,0.11), rgba(232,132,60,0) 70%);
                animation: driftC 52s ease-in-out infinite; }
      @keyframes driftA {
        0%,100% { transform: translate3d(0,0,0) scale(1); }
        50%     { transform: translate3d(9vmax,7vmax,0) scale(1.14); }
      }
      @keyframes driftB {
        0%,100% { transform: translate3d(0,0,0) scale(1.08); }
        50%     { transform: translate3d(-11vmax,-6vmax,0) scale(1); }
      }
      @keyframes driftC {
        0%,100% { transform: translate3d(-4vmax,2vmax,0) scale(1); }
        50%     { transform: translate3d(6vmax,-7vmax,0) scale(1.2); }
      }
      .court-lines { position: absolute; inset: -20%; width: 140%; height: 140%;
                     animation: courtTurn 150s linear infinite; transform-origin: 50% 50%; }
      @keyframes courtTurn { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

      /* ---- motion --------------------------------------------------------- */
      @keyframes cardIn { from { opacity: 0; transform: translateY(10px) scale(0.98); } to { opacity: 1; transform: none; } }
      @keyframes riseIn { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
      .rise { animation: riseIn 0.5s cubic-bezier(0.22,0.85,0.3,1) both; }
      /* Lists stagger in rather than snapping — reads as dealing cards out. */
      .stagger > * { animation: riseIn 0.45s cubic-bezier(0.22,0.85,0.3,1) both; }
      .stagger > *:nth-child(1) { animation-delay: 0.02s; }
      .stagger > *:nth-child(2) { animation-delay: 0.06s; }
      .stagger > *:nth-child(3) { animation-delay: 0.10s; }
      .stagger > *:nth-child(4) { animation-delay: 0.14s; }
      .stagger > *:nth-child(5) { animation-delay: 0.18s; }
      .stagger > *:nth-child(n+6) { animation-delay: 0.22s; }
      .lift { transition: transform 0.22s cubic-bezier(0.22,0.85,0.3,1), box-shadow 0.22s ease; }
      .lift:hover { transform: translateY(-3px); box-shadow: 0 12px 32px -14px rgba(20,21,28,0.30); }
      /* Rows carry inline styles, which beat Tailwind's hover: classes — so the
         tappable-row affordance lives here instead. */
      .tap-row { transition: border-color 0.15s ease, background-color 0.15s ease; }
      .tap-row:hover, .tap-row:focus-visible { border-color: rgba(20,21,28,0.26) !important; background: #F7F9FC !important; }

      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      }
    `}</style>
  );
}

/* The court field itself. Fixed, inert, and behind every screen — the one
   constant while the app changes around it. */
function AmbientCourt() {
  return (
    <div className="court-field" aria-hidden="true">
      <div className="wash wash-a" />
      <div className="wash wash-b" />
      <div className="wash wash-c" />
      <svg className="court-lines" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        <g fill="none" stroke="rgba(20,21,28,0.055)" strokeWidth="1.5">
          <circle cx="500" cy="500" r="120" />
          <circle cx="500" cy="500" r="360" />
          <path d="M 180 860 L 180 640 A 320 320 0 0 1 820 640 L 820 860" />
          <line x1="60" y1="500" x2="940" y2="500" />
          <rect x="380" y="860" width="240" height="130" />
        </g>
      </svg>
    </div>
  );
}

/* ============ DECORATIVE COURT LINES ============ */
function CourtLines() {
  const [drawn, setDrawn] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDrawn(true), 150);
    return () => clearTimeout(t);
  }, []);
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <circle cx="400" cy="380" r="140" fill="none" stroke={C.hardwood} strokeWidth="2" opacity="0.4"
        style={{ strokeDasharray: 900, strokeDashoffset: drawn ? 0 : 900, transition: 'stroke-dashoffset 1.8s ease-out' }} />
      <path d="M 150 400 L 150 300 A 250 250 0 0 0 650 300 L 650 400" fill="none" stroke={C.hardwood} strokeWidth="2" opacity="0.4"
        style={{ strokeDasharray: 1000, strokeDashoffset: drawn ? 0 : 1000, transition: 'stroke-dashoffset 1.8s ease-out 0.2s' }} />
      <line x1="0" y1="399" x2="800" y2="399" stroke={C.hardwood} strokeWidth="2" opacity="0.3" />
    </svg>
  );
}

/* ============ BADGE ============ */
function Badge({ status }) {
  /* On white these have to be tellable apart at a glance. Accepted is the only
     filled badge — the roster is the thing you're looking for. Pending picks up
     the amber from the background wash because it's the one that needs a
     decision, and passed recedes into grey. */
  const map = {
    open: { label: 'OPEN', bg: 'rgba(229,38,44,0.12)', color: C.rim },
    full: { label: 'FULL', bg: 'rgba(138,145,166,0.14)', color: C.net },
    closed: { label: 'CLOSED', bg: 'rgba(20,21,28,0.05)', color: C.paintDim },
    pending: { label: 'PENDING', bg: 'rgba(232,132,60,0.16)', color: '#A85A16' },
    accepted: { label: 'ACCEPTED', bg: C.rim, color: C.onRim },
    rejected: { label: 'PASSED', bg: 'rgba(20,21,28,0.06)', color: C.paintDim },
  };
  const s = map[status] || map.closed;
  return (
    <span className="text-xs font-mono2 font-semibold px-2 py-1 rounded uppercase tracking-wide shrink-0" style={{ background: s.bg, color: s.color }}>
      {s.label}
    </span>
  );
}

/* ============ STAT BAR ============ */
function StatBar({ label, value, max }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1 font-mono2" style={{ color: C.paintDim }}>
        <span>{label}</span><span>{value ? `${value}/${max}` : '—'}</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: C.hardwoodSoft }}>
        <div className="h-full rounded-full transition-all" style={{ width: value ? `${(value / max) * 100}%` : '0%', background: C.rim }} />
      </div>
    </div>
  );
}

/* ============ TILE PICKER ============ */
function TilePicker({ options, value, onChange, columns = 1 }) {
  return (
    <div className={columns === 2 ? 'grid gap-2 sm:grid-cols-2' : 'grid gap-2'}>
      {options.map(opt => {
        const active = value === opt.value;
        const Icon = opt.icon;
        return (
          <button key={opt.value} type="button" onClick={() => onChange(opt.value)}
            className="text-left rounded-lg border px-4 py-3 transition flex items-start gap-3"
            style={{ borderColor: active ? C.rim : C.line, background: active ? 'rgba(229,38,44,0.1)' : C.panel }}>
            {Icon && <Icon size={18} color={active ? C.rim : C.paintDim} className="mt-0.5 shrink-0" />}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="font-semibold text-sm" style={{ color: C.paint }}>{opt.label}</span>
                {active && <Check size={15} color={C.rim} />}
              </div>
              {opt.desc && <div className="text-xs mt-0.5" style={{ color: C.paintDim }}>{opt.desc}</div>}
            </div>
          </button>
        );
      })}
    </div>
  );
}

/* ============ PLAYER CARD ============ */
function PlayerCard({ data, compact = false, actions = null, questions = [], onOpen = null }) {
  const archetype = PLAYSTYLES.find(p => p.value === data.playstyle);
  const passing = PASSING_SCALE.find(p => p.value === data.passing);
  const comp = COMP_LEVELS.find(c => c.value === data.comp);
  const ArchIcon = archetype ? archetype.icon : null;
  const answeredQA = buildAnswers(data, questions);
  /* Events can turn Position and Playstyle off, so show them only when the
     player actually has them — otherwise every card reads "— · —". */
  const meta = [archetype && archetype.label, data.position].filter(Boolean);

  if (compact) {
    /* With onOpen the row is a tappable summary — just the headline facts, with
       the full application one tap away. Without it (the player's own status
       card) it stays expanded, since there's nothing to drill into. */
    const chips = [];
    if (passing) chips.push(passing.label);
    if (comp) chips.push(comp.label);
    if (data.availability && data.availability.length > 0) chips.push(`Free ${data.availability.length}d`);
    if (answeredQA.length > 0) chips.push(`${answeredQA.length} answer${answeredQA.length === 1 ? '' : 's'}`);
    if (data.notes) chips.push('Note');

    const body = (
      <>
        <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: C.hardwoodSoft }}>
          {ArchIcon ? <ArchIcon size={16} color={C.rim} /> : <User size={16} color={C.paintDim} />}
        </div>
        <div className="min-w-0 flex-1">
          <div className="font-semibold truncate" style={{ color: C.paint }}>{data.robloxUsername || 'Unnamed'}</div>
          {meta.length > 0 && (
            <div className="text-xs truncate" style={{ color: C.paintDim }}>{meta.join(' · ')}</div>
          )}
          {onOpen ? (
            chips.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-1.5">
                {chips.map((c, i) => (
                  <span key={i} className="text-xs px-1.5 py-0.5 rounded font-mono2" style={{ background: C.hardwoodSoft, color: C.paintDim }}>{c}</span>
                ))}
              </div>
            )
          ) : (
            answeredQA.length > 0 && (
              <div className="mt-1.5 space-y-0.5">
                {answeredQA.map(qa => (
                  <div key={qa.key} className="text-xs" style={{ color: C.paintDim }}>
                    <span>{qa.text}: </span><span style={{ color: C.paint }}>{qa.a}</span>
                  </div>
                ))}
              </div>
            )
          )}
        </div>
        {actions && <div onClick={e => e.stopPropagation()} className="shrink-0">{actions}</div>}
        {onOpen && <ChevronRight size={16} color={C.paintDim} className="shrink-0 self-center" />}
      </>
    );

    if (!onOpen) {
      return (
        <div className="flex items-start gap-3 rounded-lg border p-2.5" style={{ borderColor: C.line, background: C.panel }}>
          {body}
        </div>
      );
    }

    return (
      <div role="button" tabIndex={0} onClick={onOpen}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(); } }}
        title="View full application"
        className="tap-row flex items-start gap-3 rounded-lg border p-2.5 cursor-pointer"
        style={{ borderColor: C.line, background: C.panel }}>
        {body}
      </div>
    );
  }

  return (
    <div className="rounded-xl overflow-hidden border" style={{ borderColor: C.line, background: C.panel, boxShadow: C.shadow }}>
      <div className="p-4 space-y-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="font-display text-xl uppercase tracking-wide" style={{ color: C.paint }}>{data.robloxUsername || 'Your Name Here'}</div>
            {archetype && (
              <div className="flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold shrink-0" style={{ background: 'rgba(229,38,44,0.15)', color: C.rim }}>
                <ArchIcon size={11} /> {archetype.label}
              </div>
            )}
          </div>
          {data.position && <div className="text-sm" style={{ color: C.paintDim }}>{data.position}</div>}
        </div>
        {passing && <StatBar label="PASSING" value={passing.value} max={5} />}
        {comp && <StatBar label="COMP EXP" value={comp.value} max={4} />}
        {data.availability && data.availability.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {data.availability.map(d => (
              <span key={d} className="text-xs px-2 py-0.5 rounded-full font-mono2" style={{ background: C.hardwoodSoft, color: C.paintDim }}>{d}</span>
            ))}
          </div>
        )}
        {answeredQA.length > 0 && (
          <div className="space-y-1.5 pt-1 border-t" style={{ borderColor: C.line }}>
            {answeredQA.map(qa => (
              <div key={qa.key} className="text-xs pt-1.5" style={{ color: C.paintDim }}>
                <div>{qa.text}</div>
                <div style={{ color: C.paint }}>{qa.a}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ============ PHOTO FRAME ============ */
function PhotoFrame({ photo, onPick, loading }) {
  return (
    <button type="button" onClick={onPick}
      className="w-full aspect-video rounded-xl border-2 border-dashed overflow-hidden relative flex items-center justify-center transition"
      style={{ borderColor: photo ? 'transparent' : C.hardwood, background: C.hardwoodSoft }}>
      {loading ? (
        <Loader2 size={24} className="animate-spin" color={C.paintDim} />
      ) : photo ? (
        <>
          <img src={photo} alt="Your card" className="w-full h-full object-cover" />
          <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold" style={{ background: 'rgba(255,255,255,0.78)', color: C.paint }}>
            <Camera size={12} /> Change
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center gap-2 px-6 text-center">
          <Upload size={26} color={C.paintDim} />
          <span className="text-sm font-semibold" style={{ color: C.paint }}>Upload Your Card Photo</span>
          <span className="text-xs" style={{ color: C.paintDim }}>16:9 · JPG or PNG</span>
        </div>
      )}
    </button>
  );
}

/* ============ STEP DOTS ============ */
function StepDots({ step, labels }) {
  return (
    <div className="flex items-center gap-2">
      {labels.map((label, i) => (
        <div key={label} className="flex flex-col items-center gap-1.5 flex-1">
          <div className="w-full h-1 rounded-full" style={{ background: i <= step ? C.rim : C.hardwoodSoft }} />
          <span className="text-xs font-mono2 uppercase tracking-wide hidden sm:block text-center" style={{ color: i <= step ? C.paint : C.paintDim }}>{label}</span>
        </div>
      ))}
    </div>
  );
}

/* ============ TOAST ============ */
function ToastBanner({ toast }) {
  if (!toast) return null;
  const isError = toast.type === 'error';
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 rounded-lg px-4 py-3 flex items-center gap-2 shadow-lg" style={{ background: isError ? C.foul : C.rim, color: C.onRim }}>
      {isError ? <AlertCircle size={16} /> : <Check size={16} />}
      <span className="text-sm font-semibold">{toast.msg}</span>
    </div>
  );
}

/* ============ NAV BAR ============ */
function NavBar({ session, onHome, onEvents, onStatus, onSignup, onStaff }) {
  return (
    <header className="sticky top-0 z-40 border-b" style={{ background: 'rgba(255,255,255,0.86)', borderColor: C.line, backdropFilter: 'blur(8px)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
        <button onClick={onHome} className="flex items-center gap-2 shrink-0">
          <span className="font-display text-2xl uppercase" style={{ color: C.rim }}>RNS</span>
          <span className="hidden sm:block font-mono2 text-xs leading-tight tracking-widest uppercase text-left" style={{ color: C.paintDim }}>League<br />&amp; Events</span>
        </button>
        <div className="flex items-center gap-2 sm:gap-3">
          <button onClick={onEvents} className="hidden sm:inline text-sm px-3 py-2 rounded-lg transition hover:opacity-80" style={{ color: C.paintDim }}>Events</button>
          <button onClick={onStatus} className="hidden sm:inline text-sm px-3 py-2 rounded-lg transition hover:opacity-80" style={{ color: C.paintDim }}>My Status</button>
          <button onClick={onSignup} className="text-sm font-semibold px-4 py-2 rounded-lg transition hover:-translate-y-0.5" style={{ background: C.rim, color: C.onRim }}>Sign Up</button>
          <button onClick={onStaff} className="text-sm px-3 py-2 rounded-lg border flex items-center gap-1.5 transition hover:opacity-80" style={{ borderColor: C.hardwood, color: C.paint }}>
            {session ? <ShieldCheck size={14} /> : <Lock size={14} />}
            <span className="hidden sm:inline">{session ? 'Dashboard' : 'Staff'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

/* ============ HERO ============ */
function Hero({ onSignup, onStaff }) {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:py-28 text-center">
      <CourtLines />
      <div className="relative max-w-3xl mx-auto">
        <div className="font-mono2 text-xs tracking-widest mb-4 uppercase" style={{ color: C.rim }}>Practical Basketball · Community Run</div>
        <h1 className="font-display uppercase leading-none text-5xl sm:text-6xl md:text-7xl mb-5" style={{ color: C.paint }}>
          RNS'S League <span style={{ color: C.rim }}>&amp;</span> Events
        </h1>
        <p className="text-base md:text-lg max-w-xl mx-auto mb-10" style={{ color: C.paintDim }}>
          Sign up, get scouted, get drafted. The hub for pickup runs, leagues, and tournaments.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={onSignup} className="rounded-xl px-6 py-4 font-display uppercase tracking-wide text-lg transition hover:-translate-y-0.5" style={{ background: C.rim, color: C.onRim }}>
            Sign Up To Play
            <div className="text-xs font-body normal-case tracking-normal mt-0.5" style={{ color: 'rgba(255,255,255,0.72)' }}>Get scouted for the next run</div>
          </button>
          <button onClick={onStaff} className="rounded-xl px-6 py-4 font-display uppercase tracking-wide text-lg border transition hover:-translate-y-0.5" style={{ borderColor: C.hardwood, color: C.paint, background: C.inkSoft }}>
            Event Handler Login
            <div className="text-xs font-body normal-case tracking-normal mt-0.5" style={{ color: C.paintDim }}>Manage events &amp; rosters</div>
          </button>
        </div>
      </div>
    </section>
  );
}

/* ============ EVENT CARD (PUBLIC) ============ */
function EventCardPublic({ event, acceptedCount, onClick }) {
  const { day, month } = formatDateParts(event.date);
  const isFull = event.capacity && acceptedCount >= event.capacity;
  const status = event.status === 'closed' ? 'closed' : (isFull ? 'full' : 'open');
  return (
    <button onClick={onClick} className="text-left rounded-xl border overflow-hidden lift" style={{ borderColor: C.line, background: C.panel, boxShadow: C.shadow }}>
      <div className="aspect-video relative" style={{ background: C.hardwoodSoft }}>
        {event.photo ? (
          <img src={event.photo} alt={event.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Trophy size={28} color={C.paintDim} />
          </div>
        )}
        <div className="absolute top-2 left-2 rounded-lg px-2.5 py-1.5 text-center font-mono2" style={{ background: 'rgba(255,255,255,0.78)' }}>
          <div className="text-lg font-bold leading-none" style={{ color: C.rim }}>{day}</div>
          <div className="text-xs tracking-widest" style={{ color: C.paintDim }}>{month}</div>
        </div>
        <div className="absolute top-2 right-2"><Badge status={status} /></div>
      </div>
      <div className="p-4">
        <div className="font-display text-lg uppercase leading-tight" style={{ color: C.paint }}>{event.title}</div>
        <div className="text-xs flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5" style={{ color: C.paintDim }}>
          {event.time && <span className="flex items-center gap-1"><Clock size={12} />{formatTime(event.time)}</span>}
          {event.location && <span className="flex items-center gap-1"><MapPin size={12} />{event.location}</span>}
        </div>
        {event.description && (
          <p className="text-sm mt-2" style={{ color: C.paintDim, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{event.description}</p>
        )}
        <div className="text-xs mt-3 font-mono2" style={{ color: C.paintDim }}>
          {event.capacity ? `${acceptedCount} / ${event.capacity} ROSTERED` : `${acceptedCount} ROSTERED`}
        </div>
      </div>
    </button>
  );
}

/* ============ EVENTS STRIP ============ */
function EventsStrip({ events, acceptedCounts, onSignupClick }) {
  return (
    <section id="events" className="px-4 sm:px-6 py-16 max-w-6xl mx-auto">
      <div className="font-mono2 text-xs tracking-widest mb-2 uppercase" style={{ color: C.rim }}>Upcoming Events</div>
      <h2 className="font-display text-3xl uppercase mb-8" style={{ color: C.paint }}>What's On The Slate</h2>
      {events.length === 0 ? (
        <div className="rounded-xl border p-10 text-center" style={{ borderColor: C.line, color: C.paintDim }}>
          No events on the slate right now. Check back soon.
        </div>
      ) : (
        <div className="stagger grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map(ev => (
            <EventCardPublic key={ev.id} event={ev} acceptedCount={acceptedCounts[ev.id] || 0} onClick={() => onSignupClick(ev.id)} />
          ))}
        </div>
      )}
    </section>
  );
}

/* ============ FOOTER ============ */
function Footer() {
  return (
    <footer className="px-4 sm:px-6 py-10 border-t text-center" style={{ borderColor: C.line }}>
      <div className="font-display text-lg uppercase mb-1" style={{ color: C.paintDim }}>RNS's League &amp; Events</div>
      <p className="text-xs" style={{ color: C.paintDim }}>A community-run hub for Practical Basketball players.</p>
      {/* So you can tell at a glance which build the browser actually loaded —
          static files get cached hard, and a stale main.jsx looks identical to
          a broken new one. */}
      <p className="text-xs font-mono2 mt-2" style={{ color: C.paintDim, opacity: 0.7 }}>{BUILD}</p>
    </footer>
  );
}

/* ============ STATUS MODAL ============ */
function StatusModal({ events, signups, onClose }) {
  const [eventId, setEventId] = useState('');
  const [username, setUsername] = useState('');
  const [result, setResult] = useState(undefined);

  const check = () => {
    const match = signups.find(s => s.eventId === eventId && s.robloxUsername.toLowerCase() === username.trim().toLowerCase());
    setResult(match || null);
  };

  const ev = events.find(e => e.id === eventId);
  const teamName = result ? findTeamName(ev, result.id) : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(255,255,255,0.78)' }}>
      <div className="w-full max-w-sm rounded-xl border p-6 relative" style={{ background: C.panel, borderColor: C.line }}>
        <button onClick={onClose} className="absolute top-4 right-4" style={{ color: C.paintDim }}><X size={18} /></button>
        <h3 className="font-display text-xl uppercase mb-4" style={{ color: C.paint }}>My Status</h3>
        <div className="space-y-3">
          <select value={eventId} onChange={e => { setEventId(e.target.value); setResult(undefined); }} className="w-full rounded-lg px-3 py-2.5 border" style={{ background: C.inkSoft, borderColor: C.line, color: C.paint }}>
            <option value="">Choose an event</option>
            {events.map(e => <option key={e.id} value={e.id}>{e.title}</option>)}
          </select>
          <input value={username} onChange={e => { setUsername(e.target.value); setResult(undefined); }} placeholder="Your Roblox username" className="w-full rounded-lg px-3 py-2.5 border" style={{ background: C.inkSoft, borderColor: C.line, color: C.paint }} />
          <button onClick={check} disabled={!eventId || !username.trim()} className="w-full rounded-lg py-2.5 font-semibold disabled:opacity-40" style={{ background: C.rim, color: C.onRim }}>Check Status</button>
        </div>
        {result !== undefined && (
          <div className="mt-5 pt-5 border-t space-y-3" style={{ borderColor: C.line }}>
            {result ? (
              <>
                <Badge status={result.status} />
                <PlayerCard data={result} compact questions={ev ? ev.questions || [] : []} />
                {teamName && <div className="text-sm" style={{ color: C.paintDim }}>Team: <span style={{ color: C.paint }}>{teamName}</span></div>}
              </>
            ) : (
              <div className="text-sm text-center" style={{ color: C.paintDim }}>No signup found for that username on this event.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* ============ SIGNUP FLOW ============ */
const EMPTY_FORM = { eventId: '', robloxUsername: '', discord: '', position: '', playstyle: '', passing: null, comp: null, availability: [], notes: '', customAnswers: {} };

function SignupFlow({ openEvents, initialEventId, onSubmit, onCancel, submitting, signups }) {
  const [step, setStep] = useState(initialEventId ? 1 : 0);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ ...EMPTY_FORM, eventId: initialEventId || '' });

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }));

  const selectedEvent = openEvents.find(ev => ev.id === form.eventId) || null;
  const eventQuestions = normalizeQuestions(selectedEvent && selectedEvent.questions);

  /* Answers already locked in by an accepted player, for questions the handler
     marked as one-each. Once someone's on the roster with a pick, that pick is
     off the board for everyone behind them. */
  const claimed = useMemo(() => {
    const taken = {};
    if (!selectedEvent) return taken;
    (signups || [])
      .filter(su => su.eventId === selectedEvent.id && su.status === 'accepted')
      .forEach(su => {
        const answers = (su && su.customAnswers) || {};
        if (Array.isArray(answers)) return; // legacy positional answers have no ids
        eventQuestions.forEach(q => {
          if (q.unique && answers[q.id]) (taken[q.id] = taken[q.id] || new Set()).add(answers[q.id]);
          const fu = q.followUps.find(x => x.onAnswer === answers[q.id]);
          const fkey = q.id + '_followup';
          if (fu && fu.unique && answers[fkey]) (taken[fkey] = taken[fkey] || new Set()).add(answers[fkey]);
        });
      });
    return taken;
  }, [signups, selectedEvent, eventQuestions]);

  const openChoices = (key, choices) => {
    const taken = claimed[key];
    return taken ? choices.filter(c => !taken.has(c)) : choices;
  };
  const askPosition = !selectedEvent || selectedEvent.askPosition !== false;
  const askPlaystyle = !selectedEvent || selectedEvent.askPlaystyle !== false;
  const askPassing = !selectedEvent || selectedEvent.askPassing !== false;
  const askComp = !selectedEvent || selectedEvent.askComp !== false;
  const setCustomAnswer = (key, val) => setForm(f => ({ ...f, customAnswers: { ...f.customAnswers, [key]: val } }));

  /* Picking a different answer swaps in a different follow-up, so the old
     follow-up answer has to go with it — otherwise "Lakers → LeBron" would
     still be attached after switching to Celtics. */
  const answerQuestion = (q, val) => setForm(f => {
    const next = { ...f.customAnswers, [q.id]: val };
    if (f.customAnswers[q.id] !== val) delete next[q.id + '_followup'];
    return { ...f, customAnswers: next };
  });

  const toggleDay = (day) => {
    setForm(f => ({
      ...f,
      availability: f.availability.includes(day) ? f.availability.filter(d => d !== day) : [...f.availability, day],
    }));
  };

  const steps = ['Pick An Event', 'The Basics', (askPassing || askComp) ? 'Scouting Report' : 'A Few More Things'];

  const canProceed = () => {
    if (step === 0) return !!form.eventId;
    if (step === 1) return !!(form.robloxUsername.trim() && (!askPosition || form.position) && (!askPlaystyle || form.playstyle));
    if (step === 2) return !!((!askPassing || form.passing) && (!askComp || form.comp));
    return true;
  };

  const handleSubmit = async () => {
    const ok = await onSubmit(form);
    if (ok) setSuccess(true);
  };

  if (success) {
    return (
      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-16 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-5" style={{ background: 'rgba(229,38,44,0.15)' }}>
          <Trophy size={28} color={C.rim} />
        </div>
        <h2 className="font-display text-3xl uppercase mb-2" style={{ color: C.paint }}>You're On The Board</h2>
        <p className="mb-8" style={{ color: C.paintDim }}>Handlers will review your card and accept players soon. Check My Status anytime to see where you stand.</p>
        <div className="max-w-sm mx-auto mb-8">
          <PlayerCard data={form} questions={eventQuestions} />
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={() => { setForm(EMPTY_FORM); setStep(0); setSuccess(false); }} className="px-5 py-3 rounded-lg font-semibold" style={{ background: C.rim, color: C.onRim }}>Sign Up For Another Event</button>
          <button onClick={onCancel} className="px-5 py-3 rounded-lg border" style={{ borderColor: C.hardwood, color: C.paint }}>Back To Home</button>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <button onClick={onCancel} className="flex items-center gap-1.5 text-sm mb-6" style={{ color: C.paintDim }}>
        <ArrowLeft size={14} /> Back
      </button>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-72 shrink-0 md:sticky md:top-24 md:self-start">
          <PlayerCard data={form} questions={eventQuestions} />
        </div>
        <div className="flex-1 min-w-0">
          <StepDots step={step} labels={steps} />
          <div className="mt-6" style={{ minHeight: 320 }}>
            {step === 0 && (
              <div>
                <h2 className="font-display text-2xl uppercase mb-1" style={{ color: C.paint }}>Tap An Event To Sign Up</h2>
                <p className="text-sm mb-5" style={{ color: C.paintDim }}>Only open events are shown here.</p>
                {openEvents.length === 0 ? (
                  <div className="rounded-lg border p-6 text-center" style={{ borderColor: C.line, color: C.paintDim }}>
                    No open events right now. Check back soon.
                  </div>
                ) : (
                  <div className="stagger grid sm:grid-cols-2 gap-3">
                    {openEvents.map(ev => {
                      const parts = formatDateParts(ev.date);
                      return (
                        <button key={ev.id} onClick={() => { set('eventId', ev.id); setStep(1); }} className="text-left rounded-xl border overflow-hidden lift" style={{ borderColor: form.eventId === ev.id ? C.rim : C.line, background: C.panel, boxShadow: C.shadow }}>
                          <div className="aspect-video relative" style={{ background: C.hardwoodSoft }}>
                            {ev.photo ? (
                              <img src={ev.photo} alt={ev.title} className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center"><Trophy size={24} color={C.paintDim} /></div>
                            )}
                            <div className="absolute top-2 left-2 rounded px-2 py-1 font-mono2 text-xs" style={{ background: 'rgba(255,255,255,0.78)', color: C.paintDim }}>{parts.month} {parts.day}</div>
                          </div>
                          <div className="p-3">
                            <div className="font-display uppercase text-lg leading-tight" style={{ color: C.paint }}>{ev.title}</div>
                            <div className="text-xs mt-1" style={{ color: C.paintDim }}>{ev.location || 'TBD'}</div>
                            {ev.description && (
                              <p className="text-xs mt-1.5" style={{ color: C.paintDim, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{ev.description}</p>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
            {step === 1 && (
              <div className="space-y-5">
                <h2 className="font-display text-2xl uppercase mb-1" style={{ color: C.paint }}>The Basics</h2>
                <div>
                  <label className="text-xs font-mono2 uppercase tracking-wide block mb-1.5" style={{ color: C.paintDim }}>Roblox Username</label>
                  <input value={form.robloxUsername} onChange={e => set('robloxUsername', e.target.value)} placeholder="Your in-game username" className="w-full rounded-lg px-4 py-3 border" style={{ background: C.panel, borderColor: C.line, color: C.paint }} />
                </div>
                <div>
                  <label className="text-xs font-mono2 uppercase tracking-wide block mb-1.5" style={{ color: C.paintDim }}>Discord Tag (optional)</label>
                  <input value={form.discord} onChange={e => set('discord', e.target.value)} placeholder="username or @handle" className="w-full rounded-lg px-4 py-3 border" style={{ background: C.panel, borderColor: C.line, color: C.paint }} />
                </div>
                {askPosition && (
                  <div>
                    <label className="text-xs font-mono2 uppercase tracking-wide block mb-1.5" style={{ color: C.paintDim }}>Preferred Position</label>
                    <select value={form.position} onChange={e => set('position', e.target.value)} className="w-full rounded-lg px-4 py-3 border" style={{ background: C.panel, borderColor: C.line, color: C.paint }}>
                      <option value="">Choose a position</option>
                      {POSITIONS.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                )}
                {askPlaystyle && (
                  <div>
                    <label className="text-xs font-mono2 uppercase tracking-wide block mb-1.5" style={{ color: C.paintDim }}>Playstyle</label>
                    <TilePicker options={PLAYSTYLES} value={form.playstyle} onChange={v => set('playstyle', v)} columns={2} />
                  </div>
                )}
              </div>
            )}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="font-display text-2xl uppercase mb-1" style={{ color: C.paint }}>{steps[2]}</h2>
                {askPassing && (
                  <div>
                    <label className="text-xs font-mono2 uppercase tracking-wide block mb-1.5" style={{ color: C.paintDim }}>Passing</label>
                    <TilePicker options={PASSING_SCALE} value={form.passing} onChange={v => set('passing', v)} />
                  </div>
                )}
                {askComp && (
                  <div>
                    <label className="text-xs font-mono2 uppercase tracking-wide block mb-1.5" style={{ color: C.paintDim }}>Competitive Experience</label>
                    <TilePicker options={COMP_LEVELS} value={form.comp} onChange={v => set('comp', v)} />
                  </div>
                )}
                {eventQuestions.length > 0 && (
                  <div className="space-y-4 pt-1 pb-1 border-t border-b" style={{ borderColor: C.line }}>
                    <div className="text-xs font-mono2 uppercase tracking-wide pt-4" style={{ color: C.rim }}>From The Event Handler</div>
                    {eventQuestions.map((q) => {
                      const answer = form.customAnswers[q.id];
                      const followUpKey = q.id + '_followup';
                      const followUp = q.followUps.find(fu => fu.onAnswer === answer);
                      return (
                        <div key={q.id}>
                          <label className="text-xs font-mono2 uppercase tracking-wide block mb-1.5" style={{ color: C.paintDim }}>{q.text}</label>
                          {q.type === 'yesno' ? (
                            <TilePicker options={[{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }]} value={answer} onChange={v => answerQuestion(q, v)} columns={2} />
                          ) : q.type === 'choice' ? (
                            openChoices(q.id, q.choices).length > 0 ? (
                              <TilePicker options={openChoices(q.id, q.choices).map(c => ({ value: c, label: c }))} value={answer} onChange={v => answerQuestion(q, v)} columns={2} />
                            ) : (
                              <div className="text-sm rounded-lg px-4 py-3 border" style={{ borderColor: C.line, color: C.paintDim }}>Every option here has been taken.</div>
                            )
                          ) : (
                            <input value={answer || ''} onChange={e => setCustomAnswer(q.id, e.target.value)} className="w-full rounded-lg px-4 py-3 border" style={{ background: C.panel, borderColor: C.line, color: C.paint }} />
                          )}
                          {followUp && (
                            <div key={followUp.onAnswer} className="mt-3 ml-3 pl-3 border-l rise" style={{ borderColor: C.rim }}>
                              <label className="text-xs font-mono2 uppercase tracking-wide block mb-1.5" style={{ color: C.paintDim }}>{followUp.text}</label>
                              {followUp.type === 'choice' ? (
                                openChoices(followUpKey, followUp.choices).length > 0 ? (
                                  <TilePicker options={openChoices(followUpKey, followUp.choices).map(c => ({ value: c, label: c }))} value={form.customAnswers[followUpKey]} onChange={v => setCustomAnswer(followUpKey, v)} columns={2} />
                                ) : followUp.choices.length > 0 ? (
                                  <div className="text-sm rounded-lg px-4 py-3 border" style={{ borderColor: C.line, color: C.paintDim }}>Everyone here is already taken — try another pick above.</div>
                                ) : null
                              ) : (
                                <input value={form.customAnswers[followUpKey] || ''} onChange={e => setCustomAnswer(followUpKey, e.target.value)} className="w-full rounded-lg px-4 py-3 border" style={{ background: C.panel, borderColor: C.line, color: C.paint }} />
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
                <div>
                  <label className="text-xs font-mono2 uppercase tracking-wide block mb-1.5" style={{ color: C.paintDim }}>When Are You Usually Free?</label>
                  <div className="flex flex-wrap gap-2">
                    {DAYS.map(d => (
                      <button key={d} type="button" onClick={() => toggleDay(d)} className="px-3 py-1.5 rounded-full text-sm border transition" style={{ borderColor: form.availability.includes(d) ? C.rim : C.line, background: form.availability.includes(d) ? 'rgba(229,38,44,0.12)' : 'transparent', color: C.paint }}>{d}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-xs font-mono2 uppercase tracking-wide block mb-1.5" style={{ color: C.paintDim }}>Anything Else? (optional)</label>
                  <textarea value={form.notes} onChange={e => set('notes', e.target.value)} rows={3} placeholder="Notable teams, achievements, anything scouts should know" className="w-full rounded-lg px-4 py-3 border resize-none" style={{ background: C.panel, borderColor: C.line, color: C.paint }} />
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between mt-8 pt-6 border-t" style={{ borderColor: C.line }}>
            <button onClick={() => step === 0 ? onCancel() : setStep(s => s - 1)} className="flex items-center gap-1.5 text-sm px-4 py-2.5 rounded-lg" style={{ color: C.paintDim }}>
              <ChevronLeft size={16} /> {step === 0 ? 'Cancel' : 'Back'}
            </button>
            {step < 2 ? (
              <button disabled={!canProceed()} onClick={() => setStep(s => s + 1)} className="flex items-center gap-1.5 text-sm font-semibold px-5 py-2.5 rounded-lg disabled:opacity-40 transition" style={{ background: C.rim, color: C.onRim }}>
                Next <ChevronRight size={16} />
              </button>
            ) : (
              <button disabled={!canProceed() || submitting} onClick={handleSubmit} className="flex items-center gap-1.5 text-sm font-semibold px-5 py-2.5 rounded-lg disabled:opacity-40 transition" style={{ background: C.rim, color: C.onRim }}>
                {submitting ? <Loader2 size={16} className="animate-spin" /> : <Check size={16} />} Submit My Card
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ HANDLER AUTH ============ */
function HandlerAuth({ onLogin, busy }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState('');

  const submit = async () => {
    setError('');
    if (!username.trim() || !password) { setError('Enter a username and password.'); return; }
    const res = await onLogin(username.trim(), password);
    if (!res.ok) setError(res.message);
  };

  return (
    <section className="max-w-sm mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4" style={{ background: C.hardwoodSoft }}>
          <Lock size={22} color={C.rim} />
        </div>
        <h2 className="font-display text-2xl uppercase" style={{ color: C.paint }}>Staff Entrance</h2>
        <p className="text-sm mt-1" style={{ color: C.paintDim }}>For event handlers only.</p>
      </div>
      <div className="space-y-3">
        <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" className="w-full rounded-lg px-4 py-3 border" style={{ background: C.panel, borderColor: C.line, color: C.paint }} />
        <div className="relative">
          <input type={showPw ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} onKeyDown={e => { if (e.key === 'Enter') submit(); }} placeholder="Password" className="w-full rounded-lg px-4 py-3 border pr-11" style={{ background: C.panel, borderColor: C.line, color: C.paint }} />
          <button type="button" onClick={() => setShowPw(s => !s)} className="absolute right-3 top-1/2 -translate-y-1/2" style={{ color: C.paintDim }}>
            {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
        {error && <div className="text-sm flex items-center gap-1.5" style={{ color: C.foul }}><AlertCircle size={14} />{error}</div>}
        <button onClick={submit} disabled={busy} className="w-full rounded-lg py-3 font-semibold flex items-center justify-center gap-2 disabled:opacity-60" style={{ background: C.rim, color: C.onRim }}>
          {busy ? <Loader2 size={16} className="animate-spin" /> : <LogIn size={16} />}
          Log In
        </button>
      </div>
    </section>
  );
}

/* ============ EVENT FORM (CREATE / EDIT) ============ */
/* ============ QUESTION BUILDER PARTS ============ */

/* An actual checkbox. The first version of this was small grey text with a
   plus icon, which read as "add something" rather than a setting you switch. */
function CheckToggle({ on, onToggle, label, hint }) {
  return (
    <button type="button" onClick={onToggle}
      className="w-full flex items-start gap-2.5 px-3 py-2.5 rounded-lg border text-left transition"
      style={{ borderColor: on ? C.rim : C.line, background: on ? 'rgba(229,38,44,0.07)' : C.panel }}>
      <span className="w-4 h-4 rounded flex items-center justify-center shrink-0 border mt-0.5"
        style={{ borderColor: on ? C.rim : C.paintDim, background: on ? C.rim : 'transparent' }}>
        {on && <Check size={11} color={C.onRim} />}
      </span>
      <span className="min-w-0">
        <span className="text-xs block" style={{ color: C.paint }}>{label}</span>
        {hint && <span className="text-xs block mt-0.5" style={{ color: C.paintDim }}>{hint}</span>}
      </span>
    </button>
  );
}

/* Add/remove the answer options for a multiple-choice question. The draft is
   controlled by the parent so a typed-but-not-added answer isn't stranded here
   when the handler moves on — the parent commits it for them. */
function ChoiceListEditor({ draft, onDraftChange, onAdd, placeholder }) {
  const commit = () => {
    const v = draft.trim();
    if (!v) return;
    onAdd(v); // the parent clears the draft in the SAME update — see below
  };
  return (
    <div className="flex gap-2">
      <input value={draft} onChange={e => onDraftChange(e.target.value)}
        onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); commit(); } }}
        placeholder={placeholder} className="flex-1 rounded-lg px-3 py-2 border text-sm"
        style={{ background: C.panel, borderColor: C.line, color: C.paint }} />
      <button type="button" onClick={commit} disabled={!draft.trim()}
        className="px-3 rounded-lg border text-sm disabled:opacity-40"
        style={{ borderColor: C.line, color: C.paint }}>Add</button>
    </div>
  );
}

/* The follow-up attached to one specific answer: its question, whether the
   player types or picks, and — if they pick — the options they can pick from. */
function FollowUpEditor({ followUp, onChange, onRemove }) {
  return (
    <div className="mt-2 rounded-lg p-2.5 space-y-2 border-l-2" style={{ background: C.panel, borderColor: C.rim }}>
      <div className="flex items-center gap-2">
        <span className="text-xs font-mono2 uppercase tracking-wide flex-1" style={{ color: C.rim }}>Then ask</span>
        <button type="button" onClick={onRemove} style={{ color: C.paintDim }} aria-label="Remove follow-up"><X size={13} /></button>
      </div>
      <input value={followUp.text} onChange={e => onChange({ ...followUp, text: e.target.value })}
        placeholder="e.g. Which player do you want?" className="w-full rounded-lg px-3 py-2 border text-sm"
        style={{ background: C.inkSoft, borderColor: C.line, color: C.paint }} />
      <div className="flex gap-2">
        {[{ v: 'text', l: 'They type it' }, { v: 'choice', l: 'They pick one' }].map(o => (
          <button key={o.v} type="button" onClick={() => onChange({ ...followUp, type: o.v })}
            className="flex-1 py-1.5 rounded-lg text-xs border"
            style={{ borderColor: followUp.type === o.v ? C.rim : C.line, background: followUp.type === o.v ? 'rgba(229,38,44,0.08)' : 'transparent', color: C.paint }}>
            {o.l}
          </button>
        ))}
      </div>
      {followUp.type === 'choice' && (
        <div className="space-y-1.5">
          {followUp.choices.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {followUp.choices.map(c => (
                <span key={c} className="text-xs px-2 py-1 rounded-full flex items-center gap-1.5" style={{ background: C.inkSoft, color: C.paint }}>
                  {c}
                  <button type="button" onClick={() => onChange({ ...followUp, choices: followUp.choices.filter(x => x !== c) })} style={{ color: C.paintDim }}><X size={11} /></button>
                </span>
              ))}
            </div>
          )}
          <ChoiceListEditor
            draft={followUp.draft || ''}
            onDraftChange={(v) => onChange({ ...followUp, draft: v })}
            onAdd={(v) => onChange({ ...followUp, choices: followUp.choices.includes(v) ? followUp.choices : [...followUp.choices, v], draft: '' })}
            placeholder="Add an option they can pick"
          />
          <CheckToggle on={!!followUp.unique} onToggle={() => onChange({ ...followUp, unique: !followUp.unique })}
            label="Each option can only be taken once"
            hint="Taken off the list once the player who picked it is accepted." />
        </div>
      )}
    </div>
  );
}

/* One answer row in the composer: the answer itself, plus the follow-up it
   opens. Yes/No answers are fixed, so they can't be renamed or removed. */
function AnswerRow({ answer, fixed, onRemove, onFollowUpChange }) {
  return (
    <div className="rounded-lg p-2.5" style={{ background: C.hardwoodSoft }}>
      <div className="flex items-center gap-2">
        <span className="text-sm flex-1 font-semibold" style={{ color: C.paint }}>{answer.label || answer.value}</span>
        {!answer.followUp && (
          <button type="button" onClick={() => onFollowUpChange({ text: '', type: 'text', choices: [] })}
            className="text-xs flex items-center gap-1" style={{ color: C.rim }}>
            <Plus size={12} />Follow-up
          </button>
        )}
        {!fixed && <button type="button" onClick={onRemove} style={{ color: C.paintDim }} aria-label="Remove answer"><X size={14} /></button>}
      </div>
      {answer.followUp && (
        <FollowUpEditor
          followUp={answer.followUp}
          onChange={onFollowUpChange}
          onRemove={() => onFollowUpChange(null)}
        />
      )}
    </div>
  );
}

function EventForm({ initial, onSave, onCancel, busy }) {
  const [f, setF] = useState(initial || { title: '', date: '', time: '', location: '', capacity: '', description: '', photo: '', questions: [], askPosition: true, askPlaystyle: true, askPassing: true, askComp: true });
  const [newQText, setNewQText] = useState('');
  const [newQType, setNewQType] = useState('text');
  /* One row per possible answer: { value, label, followUp }. Yes/No fills this
     in automatically; multiple choice lets the handler build it up. Text
     questions have no answers to branch on, so it stays empty. */
  const [newQAnswers, setNewQAnswers] = useState([]);
  const [answerDraft, setAnswerDraft] = useState('');
  const [newQUnique, setNewQUnique] = useState(false);
  const [qHint, setQHint] = useState('');
  const [photoError, setPhotoError] = useState('');
  const [photoLoading, setPhotoLoading] = useState(false);
  const fileInputRef = useRef(null);
  const set = (k, v) => setF(s => ({ ...s, [k]: v }));
  const valid = f.title.trim() && f.date;
  const questions = normalizeQuestions(f.questions);

  const YES_NO = [
    { value: 'yes', label: 'Yes', followUp: null },
    { value: 'no', label: 'No', followUp: null },
  ];
  const pickType = (t) => {
    setNewQType(t);
    setNewQAnswers(t === 'yesno' ? YES_NO : []);
    setQHint('');
  };
  const addAnswer = (v) => {
    setNewQAnswers(list => (list.some(a => a.value === v) ? list : [...list, { value: v, followUp: null }]));
    setAnswerDraft('');
    setQHint('');
  };
  const setAnswerFollowUp = (i, followUp) =>
    setNewQAnswers(list => list.map((a, idx) => (idx === i ? { ...a, followUp } : a)));

  /* Builds the question currently in the composer, folding in an answer that
     was typed but never tapped "Add" — that stranded draft was the reason a
     question could look complete and refuse to add. Returns null and sets a
     reason when there genuinely isn't enough to save. */
  const commitQuestion = (silent) => {
    const text = newQText.trim();
    const pendingAnswer = answerDraft.trim();
    const answers = (newQType === 'choice' && pendingAnswer && !newQAnswers.some(a => a.value === pendingAnswer))
      ? [...newQAnswers, { value: pendingAnswer, followUp: null }]
      : newQAnswers;

    if (!text) {
      if (!silent && (answers.length || pendingAnswer)) setQHint('Give the question a name first.');
      return null;
    }
    if (newQType === 'choice' && answers.length < 2) {
      if (!silent) setQHint('Multiple choice needs at least two answers.');
      return null;
    }
    const emptyBranch = answers.find(a => a.followUp && a.followUp.type === 'choice'
      && a.followUp.text.trim()
      && a.followUp.choices.length === 0
      && !(a.followUp.draft || '').trim());
    if (emptyBranch) {
      if (!silent) setQHint(`The follow-up for "${emptyBranch.value}" has no options to pick from.`);
      return null;
    }
    return {
      id: uid(),
      text,
      type: newQType,
      unique: newQType === 'choice' ? !!newQUnique : false,
      choices: newQType === 'choice' ? answers.map(a => a.value) : [],
      followUps: answers
        .filter(a => a.followUp && a.followUp.text.trim())
        .map(a => ({
          onAnswer: a.value,
          text: a.followUp.text.trim(),
          type: a.followUp.type,
          unique: a.followUp.type === 'choice' ? !!a.followUp.unique : false,
          choices: a.followUp.type === 'choice'
            ? (a.followUp.draft && a.followUp.draft.trim() && !a.followUp.choices.includes(a.followUp.draft.trim())
                ? [...a.followUp.choices, a.followUp.draft.trim()]
                : a.followUp.choices)
            : [],
        })),
    };
  };

  const resetComposer = () => {
    setNewQText(''); setNewQType('text'); setNewQAnswers([]);
    setAnswerDraft(''); setNewQUnique(false); setQHint('');
  };

  const addQuestion = () => {
    const q = commitQuestion(false);
    if (!q) return;
    set('questions', [...questions, q]);
    resetComposer();
  };

  /* Saving with a question still sitting in the composer used to throw it away.
     Add it first, then save. */
  const saveEvent = () => {
    const pending = commitQuestion(true);
    onSave(pending ? { ...f, questions: [...questions, pending] } : f);
  };
  const removeQuestion = (i) => set('questions', questions.filter((_, idx) => idx !== i));

  const handleFile = async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    setPhotoError('');
    setPhotoLoading(true);
    try {
      const dataUrl = await resizeImageToThumb(file);
      set('photo', dataUrl);
    } catch (err) {
      setPhotoError(err.message || 'Could not process that image.');
    } finally {
      setPhotoLoading(false);
      e.target.value = '';
    }
  };

  return (
    <div className="rounded-xl border p-5 space-y-4" style={{ borderColor: C.line, background: C.panel, boxShadow: C.shadow }}>
      <div>
        <label className="text-xs font-mono2 uppercase tracking-wide block mb-1.5" style={{ color: C.paintDim }}>Event Photo</label>
        <div className="max-w-sm">
          <PhotoFrame photo={f.photo} onPick={() => fileInputRef.current && fileInputRef.current.click()} loading={photoLoading} />
          <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFile} className="hidden" />
          {photoError && <div className="text-sm mt-2 flex items-center gap-1.5" style={{ color: C.foul }}><AlertCircle size={14} />{photoError}</div>}
        </div>
        <div className="text-xs mt-1.5" style={{ color: C.paintDim }}>This is what players tap to sign up — make it count.</div>
      </div>
      <div className="stagger grid sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <label className="text-xs font-mono2 uppercase tracking-wide block mb-1.5" style={{ color: C.paintDim }}>Event Title</label>
          <input value={f.title} onChange={e => set('title', e.target.value)} placeholder="Friday Night Runs" className="w-full rounded-lg px-3 py-2.5 border" style={{ background: C.inkSoft, borderColor: C.line, color: C.paint }} />
        </div>
        <div>
          <label className="text-xs font-mono2 uppercase tracking-wide mb-1.5 flex items-center gap-1" style={{ color: C.paintDim }}><Calendar size={11} />Date</label>
          <input type="date" value={f.date} onChange={e => set('date', e.target.value)} className="w-full rounded-lg px-3 py-2.5 border" style={{ background: C.inkSoft, borderColor: C.line, color: C.paint }} />
        </div>
        <div>
          <label className="text-xs font-mono2 uppercase tracking-wide block mb-1.5" style={{ color: C.paintDim }}>Time</label>
          <input type="time" value={f.time} onChange={e => set('time', e.target.value)} className="w-full rounded-lg px-3 py-2.5 border" style={{ background: C.inkSoft, borderColor: C.line, color: C.paint }} />
        </div>
        <div>
          <label className="text-xs font-mono2 uppercase tracking-wide block mb-1.5" style={{ color: C.paintDim }}>Location</label>
          <input value={f.location} onChange={e => set('location', e.target.value)} placeholder="Server / court name" className="w-full rounded-lg px-3 py-2.5 border" style={{ background: C.inkSoft, borderColor: C.line, color: C.paint }} />
        </div>
        <div>
          <label className="text-xs font-mono2 uppercase tracking-wide block mb-1.5" style={{ color: C.paintDim }}>Capacity (optional)</label>
          <input type="number" min="1" value={f.capacity} onChange={e => set('capacity', e.target.value)} placeholder="No limit" className="w-full rounded-lg px-3 py-2.5 border" style={{ background: C.inkSoft, borderColor: C.line, color: C.paint }} />
        </div>
        <div className="sm:col-span-2">
          <label className="text-xs font-mono2 uppercase tracking-wide block mb-1.5" style={{ color: C.paintDim }}>Description</label>
          <textarea rows={2} value={f.description} onChange={e => set('description', e.target.value)} placeholder="Format, rules, anything players should know" className="w-full rounded-lg px-3 py-2.5 border resize-none" style={{ background: C.inkSoft, borderColor: C.line, color: C.paint }} />
        </div>
      </div>
      <div>
        <label className="text-xs font-mono2 uppercase tracking-wide block mb-1.5" style={{ color: C.paintDim }}>Signup Fields</label>
        <div className="flex flex-wrap gap-2">
          {SIGNUP_FIELDS.map(fld => {
            const on = f[fld.key] !== false;
            return (
              <button key={fld.key} type="button" onClick={() => set(fld.key, !on)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg border text-sm transition"
                style={{ borderColor: on ? C.rim : C.line, background: on ? 'rgba(229,38,44,0.1)' : 'transparent', color: on ? C.paint : C.paintDim }}>
                {on ? <Check size={14} /> : <X size={14} />} {fld.label}
              </button>
            );
          })}
        </div>
      </div>
      <div>
        <label className="text-xs font-mono2 uppercase tracking-wide block mb-1.5" style={{ color: C.paintDim }}>Signup Questions (optional)</label>
        <div className="text-xs mb-2" style={{ color: C.paintDim }}>Ask players anything else you need for this event. Yes/No and multiple-choice answers can each open a different follow-up question — pick a team, then pick from that team's players.</div>
        {questions.length > 0 && (
          <div className="space-y-2 mb-3">
            {questions.map((q, i) => (
              <div key={q.id} className="rounded-lg px-3 py-2" style={{ background: C.inkSoft }}>
                <div className="flex items-center gap-2">
                  <span className="text-sm flex-1" style={{ color: C.paint }}>{q.text}</span>
                  <span className="text-xs font-mono2 uppercase" style={{ color: C.paintDim }}>
                    {q.type === 'yesno' ? 'Yes/No' : q.type === 'choice' ? 'Choice' : 'Text'}{q.unique ? ' · 1 each' : ''}
                  </span>
                  <button type="button" onClick={() => removeQuestion(i)} style={{ color: C.paintDim }} aria-label="Remove question"><X size={14} /></button>
                </div>
                {q.choices.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    {q.choices.map(c => (
                      <span key={c} className="text-xs px-1.5 py-0.5 rounded" style={{ background: C.hardwoodSoft, color: C.paintDim }}>{c}</span>
                    ))}
                  </div>
                )}
                {q.followUps.map(fu => (
                  <div key={fu.onAnswer} className="mt-1.5 ml-3 pl-3 border-l text-xs" style={{ borderColor: C.line, color: C.paintDim }}>
                    If <span style={{ color: C.rim }}>{fu.onAnswer === 'yes' ? 'Yes' : fu.onAnswer === 'no' ? 'No' : fu.onAnswer}</span> → {fu.text}
                    {fu.type === 'choice' && fu.choices.length > 0 && (
                      <span> ({fu.choices.join(', ')}){fu.unique ? ' · 1 each' : ''}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
        <div className="rounded-lg p-3 space-y-2" style={{ background: C.inkSoft }}>
          <input value={newQText} onChange={e => setNewQText(e.target.value)} placeholder="e.g. Which team are you signing up for?" className="w-full rounded-lg px-3 py-2.5 border" style={{ background: C.panel, borderColor: C.line, color: C.paint }} />
          <div className="grid grid-cols-3 gap-2">
            {[{ v: 'text', l: 'Text' }, { v: 'yesno', l: 'Yes/No' }, { v: 'choice', l: 'Choices' }].map(o => (
              <button key={o.v} type="button" onClick={() => pickType(o.v)} className="py-2 rounded-lg text-sm border transition"
                style={{ borderColor: newQType === o.v ? C.rim : C.line, background: newQType === o.v ? 'rgba(229,38,44,0.08)' : 'transparent', color: C.paint }}>
                {o.l}
              </button>
            ))}
          </div>

          {newQType !== 'text' && (
            <div className="pt-1 space-y-2">
              <div className="text-xs font-mono2 uppercase tracking-wide" style={{ color: C.paintDim }}>
                {newQType === 'yesno' ? 'Answers' : `Answers (${newQAnswers.length})`}
              </div>
              {newQAnswers.map((a, i) => (
                <AnswerRow
                  key={a.value}
                  answer={a}
                  fixed={newQType === 'yesno'}
                  onRemove={() => setNewQAnswers(list => list.filter((_, idx) => idx !== i))}
                  onFollowUpChange={(fu) => setAnswerFollowUp(i, fu)}
                />
              ))}
              {newQType === 'choice' && (
                <ChoiceListEditor
                  draft={answerDraft}
                  onDraftChange={setAnswerDraft}
                  onAdd={addAnswer}
                  placeholder="Add an answer, e.g. Lakers"
                />
              )}
              {newQType === 'choice' && (
                <CheckToggle on={newQUnique} onToggle={() => setNewQUnique(v => !v)}
                  label="Each answer can only be taken once"
                  hint="Taken off the list once the player who picked it is accepted." />
              )}
            </div>
          )}

          {qHint && <div className="text-xs" style={{ color: C.foul }}>{qHint}</div>}
          <button type="button" onClick={addQuestion} className="w-full py-2 rounded-lg border flex items-center justify-center gap-1 text-sm" style={{ borderColor: C.line, color: C.paint }}><Plus size={14} />Add Question</button>
        </div>
      </div>
      <div className="flex gap-3">
        <button disabled={!valid || busy} onClick={saveEvent} className="px-4 py-2.5 rounded-lg font-semibold text-sm disabled:opacity-40 flex items-center gap-2" style={{ background: C.rim, color: C.onRim }}>
          {busy && <Loader2 size={14} className="animate-spin" />} Save Event
        </button>
        <button onClick={onCancel} className="px-4 py-2.5 rounded-lg text-sm" style={{ color: C.paintDim }}>Cancel</button>
      </div>
    </div>
  );
}

/* ============ APPLICANT DETAIL ============ */
function DetailSection({ label, children }) {
  return (
    <div>
      <div className="text-xs font-mono2 uppercase tracking-wide mb-2" style={{ color: C.paintDim }}>{label}</div>
      {children}
    </div>
  );
}

function ApplicantDetail({ applicant, event, accepted, index, total, onPrev, onNext, onAccept, onReject, onReconsider, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft' && onPrev) onPrev();
      else if (e.key === 'ArrowRight' && onNext) onNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  if (!applicant) return null;

  const questions = (event && event.questions) || [];
  const qa = buildAnswers(applicant, questions, true);
  const archetype = PLAYSTYLES.find(p => p.value === applicant.playstyle);
  const passing = PASSING_SCALE.find(p => p.value === applicant.passing);
  const comp = COMP_LEVELS.find(c => c.value === applicant.comp);
  const ArchIcon = archetype ? archetype.icon : null;
  const submitted = formatSubmitted(applicant.submittedAt);
  const teamName = findTeamName(event, applicant.id);
  const meta = [archetype && archetype.label, applicant.position].filter(Boolean);

  /* Which of this player's one-each picks someone on the roster already holds. */
  const conflicts = [];
  const mine = (applicant.customAnswers && !Array.isArray(applicant.customAnswers)) ? applicant.customAnswers : {};
  normalizeQuestions(questions).forEach(q => {
    const fu = q.followUps.find(x => x.onAnswer === mine[q.id]);
    const checks = [
      q.unique && mine[q.id] ? { key: q.id, val: mine[q.id] } : null,
      fu && fu.unique && mine[q.id + '_followup'] ? { key: q.id + '_followup', val: mine[q.id + '_followup'] } : null,
    ].filter(Boolean);
    checks.forEach(({ key, val }) => {
      const holder = (accepted || []).find(other => {
        if (other.id === applicant.id) return false;
        const a2 = (other.customAnswers && !Array.isArray(other.customAnswers)) ? other.customAnswers : {};
        return a2[key] === val;
      });
      if (holder) conflicts.push(`${val} is already taken by ${holder.robloxUsername || 'another player'}`);
    });
  });

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4" style={{ background: 'rgba(20,21,28,0.42)' }}
      onClick={onClose}>
      <div onClick={e => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Application detail"
        className="w-full sm:max-w-lg rounded-t-2xl sm:rounded-xl border flex flex-col"
        style={{ background: C.panel, borderColor: C.line, maxHeight: '92vh', animation: 'cardIn 0.25s ease-out' }}>

        {/* header */}
        <div className="p-4 sm:p-5 border-b flex items-start gap-3" style={{ borderColor: C.line }}>
          <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0" style={{ background: C.hardwoodSoft }}>
            {ArchIcon ? <ArchIcon size={20} color={C.rim} /> : <User size={20} color={C.paintDim} />}
          </div>
          <div className="min-w-0 flex-1">
            <div className="font-display text-xl uppercase tracking-wide leading-tight truncate" style={{ color: C.paint }}>
              {applicant.robloxUsername || 'Unnamed'}
            </div>
            {meta.length > 0 && (
              <div className="text-xs mt-0.5" style={{ color: C.paintDim }}>{meta.join(' · ')}</div>
            )}
          </div>
          <Badge status={applicant.status} />
          <button onClick={onClose} aria-label="Close" style={{ color: C.paintDim }}><X size={18} /></button>
        </div>

        {/* body */}
        <div className="p-4 sm:p-5 space-y-5 overflow-y-auto flex-1 min-h-0">
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs" style={{ color: C.paintDim }}>
            {applicant.discord && <span>Discord: <span style={{ color: C.paint }}>{applicant.discord}</span></span>}
            {submitted && <span>Signed up {submitted}</span>}
            {teamName && <span>Team: <span style={{ color: C.paint }}>{teamName}</span></span>}
          </div>

          {(passing || comp) && (
          <DetailSection label="Scouting Report">
            <div className="space-y-3">
              {passing && (
                <div>
                  <StatBar label="PASSING" value={passing.value} max={5} />
                  <div className="text-xs mt-1" style={{ color: C.paint }}>{passing.label}</div>
                </div>
              )}
              {comp && (
                <div>
                  <StatBar label="COMP EXP" value={comp.value} max={4} />
                  <div className="text-xs mt-1" style={{ color: C.paint }}>{comp.label}</div>
                </div>
              )}
            </div>
          </DetailSection>
          )}

          <DetailSection label="Availability">
            {applicant.availability && applicant.availability.length > 0 ? (
              <div className="flex flex-wrap gap-1.5">
                {DAYS.map(d => {
                  const on = applicant.availability.includes(d);
                  return (
                    <span key={d} className="text-xs px-2 py-1 rounded-full font-mono2 border"
                      style={{ borderColor: on ? C.rim : C.line, background: on ? 'rgba(229,38,44,0.12)' : 'transparent', color: on ? C.paint : C.paintDim, opacity: on ? 1 : 0.5 }}>
                      {d}
                    </span>
                  );
                })}
              </div>
            ) : (
              <div className="text-sm" style={{ color: C.paintDim }}>Didn't say.</div>
            )}
          </DetailSection>

          {questions.length > 0 && (
            <DetailSection label={`Handler Questions (${qa.filter(x => x.answered).length}/${qa.length})`}>
              <div className="space-y-2.5">
                {qa.map(item => (
                  <div key={item.key} className={`rounded-lg p-3 ${item.followUp ? 'ml-3 border-l-2' : ''}`}
                    style={{ background: C.hardwoodSoft, borderColor: item.followUp ? C.hardwood : undefined }}>
                    <div className="text-xs mb-1" style={{ color: C.paintDim }}>{item.text}</div>
                    <div className="text-sm whitespace-pre-wrap break-words" style={{ color: item.answered ? C.paint : C.paintDim, fontStyle: item.answered ? 'normal' : 'italic' }}>
                      {item.answered ? item.a : 'No answer'}
                    </div>
                  </div>
                ))}
              </div>
            </DetailSection>
          )}

          <DetailSection label="Anything Else">
            {applicant.notes ? (
              <p className="text-sm whitespace-pre-wrap break-words rounded-lg p-3" style={{ color: C.paint, background: C.hardwoodSoft }}>{applicant.notes}</p>
            ) : (
              <div className="text-sm" style={{ color: C.paintDim }}>Left blank.</div>
            )}
          </DetailSection>
        </div>

        {/* footer */}
        <div className="p-4 sm:p-5 border-t space-y-3" style={{ borderColor: C.line }}>
          {conflicts.length > 0 && (
            <div className="rounded-lg px-3 py-2 text-xs" style={{ background: 'rgba(232,132,60,0.14)', color: '#A85A16' }}>
              {conflicts.join(' · ')}. Accepting means two players hold the same pick.
            </div>
          )}
          {applicant.status === 'pending' ? (
            <div className="flex gap-3">
              <button onClick={() => onReject(applicant.id)} className="flex-1 py-3 rounded-xl border flex items-center justify-center gap-2 font-semibold text-sm uppercase tracking-wide" style={{ borderColor: C.foul, color: C.foul }}>
                <X size={16} />Pass
              </button>
              <button onClick={() => onAccept(applicant.id)} className="flex-1 py-3 rounded-xl flex items-center justify-center gap-2 font-semibold text-sm uppercase tracking-wide" style={{ background: C.rim, color: C.onRim }}>
                <Check size={16} />Accept
              </button>
            </div>
          ) : (
            <button onClick={() => onReconsider(applicant.id)} className="w-full py-3 rounded-xl border flex items-center justify-center gap-2 text-sm font-semibold" style={{ borderColor: C.line, color: C.paintDim }}>
              <RefreshCw size={14} />{applicant.status === 'accepted' ? 'Remove From Roster' : 'Move Back To Applicants'}
            </button>
          )}
          {total > 1 && (
            <div className="flex items-center justify-between">
              <button onClick={onPrev} className="flex items-center gap-1.5 text-xs px-2 py-1.5 rounded-lg" style={{ color: C.paintDim }}>
                <ChevronLeft size={14} />Prev
              </button>
              <span className="text-xs font-mono2" style={{ color: C.paintDim }}>{index + 1} of {total}</span>
              <button onClick={onNext} className="flex items-center gap-1.5 text-xs px-2 py-1.5 rounded-lg" style={{ color: C.paintDim }}>
                Next<ChevronRight size={14} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ============ APPLICANT REVIEW MODE ============ */
function ApplicantReviewMode({ applicants, questions, onAccept, onReject, onExit, onOpenDetail }) {
  const [index, setIndex] = useState(0);
  const current = applicants[index] || null;

  if (!current) {
    return (
      <div className="rounded-xl border p-8 text-center" style={{ borderColor: C.line, background: C.panel, boxShadow: C.shadow }}>
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4" style={{ background: 'rgba(229,38,44,0.15)' }}>
          <Trophy size={24} color={C.rim} />
        </div>
        <div className="font-display text-xl uppercase mb-1" style={{ color: C.paint }}>All Caught Up</div>
        <p className="text-sm mb-5" style={{ color: C.paintDim }}>You've reviewed everyone in the queue.</p>
        <button onClick={onExit} className="px-5 py-2.5 rounded-lg font-semibold text-sm" style={{ background: C.rim, color: C.onRim }}>Back To Event</button>
      </div>
    );
  }

  return (
    <div className="rounded-xl border p-4 sm:p-6" style={{ borderColor: C.line, background: C.panel, boxShadow: C.shadow }}>
      <div className="flex items-center justify-between mb-5">
        <button onClick={onExit} className="flex items-center gap-1.5 text-sm" style={{ color: C.paintDim }}><ArrowLeft size={14} />Exit</button>
        <div className="text-xs font-mono2 uppercase tracking-wide" style={{ color: C.paintDim }}>{Math.min(index + 1, applicants.length)} of {applicants.length}</div>
      </div>
      <div key={current.id} className="max-w-sm mx-auto mb-4" style={{ animation: 'cardIn 0.3s ease-out' }}>
        <PlayerCard data={current} questions={questions} />
      </div>
      {onOpenDetail && (
        <div className="max-w-sm mx-auto mb-5 text-center">
          <button onClick={() => onOpenDetail(current.id)} className="text-xs underline underline-offset-2" style={{ color: C.paintDim }}>
            View full application
          </button>
        </div>
      )}
      <div className="flex gap-3 max-w-sm mx-auto">
        <button onClick={() => onReject(current.id)} className="flex-1 py-4 rounded-xl border flex flex-col items-center gap-1.5 transition hover:-translate-y-0.5" style={{ borderColor: C.foul, color: C.foul }}>
          <X size={22} />
          <span className="text-xs font-semibold uppercase tracking-wide">Pass</span>
        </button>
        <button onClick={() => onAccept(current.id)} className="flex-1 py-4 rounded-xl flex flex-col items-center gap-1.5 transition hover:-translate-y-0.5" style={{ background: C.rim, color: C.onRim }}>
          <Check size={22} />
          <span className="text-xs font-semibold uppercase tracking-wide">Accept</span>
        </button>
      </div>
      {applicants.length > 1 && (
        <div className="flex justify-center gap-1.5 mt-5">
          {applicants.map((a, i) => (
            <div key={a.id} className="rounded-full transition-all" style={{ width: i === index ? 16 : 6, height: 6, background: i === index ? C.rim : C.line }} />
          ))}
        </div>
      )}
    </div>
  );
}

/* ============ EVENT MANAGER ROW ============ */
function EventManagerRow({ event, applicants, accepted, rejected, signupsById, onAccept, onReject, onReconsider, onAssignTeams, onDelete, onEdit, onToggleStatus, assigning }) {
  const [expanded, setExpanded] = useState(false);
  const [editing, setEditing] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  const [detail, setDetail] = useState(null); // { list: 'applicants'|'accepted'|'rejected', id }
  const [numTeams, setNumTeams] = useState(Math.max(2, Math.round((accepted.length || 2) / 5)));
  const parts = formatDateParts(event.date);

  const lists = { applicants, accepted, rejected };
  const detailList = detail ? (lists[detail.list] || []) : [];
  const detailIndex = detail ? detailList.findIndex(p => p.id === detail.id) : -1;
  const detailPlayer = detailIndex >= 0 ? detailList[detailIndex] : null;
  const stepDetail = (delta) => {
    if (detailIndex < 0 || detailList.length === 0) return;
    const next = (detailIndex + delta + detailList.length) % detailList.length;
    setDetail({ list: detail.list, id: detailList[next].id });
  };
  /* After accept/pass the player leaves this list, so advance to whoever slid
     into their slot — or close out when the queue's empty. */
  const actOnDetail = (fn) => (id) => {
    const nextUp = detailList[detailIndex + 1] || detailList[detailIndex - 1] || null;
    fn(id);
    setDetail(nextUp && detail.list === 'applicants' ? { list: 'applicants', id: nextUp.id } : null);
  };

  useEffect(() => {
    if (confirmDelete) {
      const t = setTimeout(() => setConfirmDelete(false), 4000);
      return () => clearTimeout(t);
    }
  }, [confirmDelete]);

  if (editing) {
    return <EventForm initial={{ ...event, capacity: event.capacity || '', questions: normalizeQuestions(event.questions), askPosition: event.askPosition !== false, askPlaystyle: event.askPlaystyle !== false, askPassing: event.askPassing !== false, askComp: event.askComp !== false }} onSave={(f) => { onEdit(event.id, f); setEditing(false); }} onCancel={() => setEditing(false)} />;
  }

  return (
    <div className="rounded-xl border overflow-hidden lift" style={{ borderColor: C.line, background: C.panel, boxShadow: C.shadow }}>
      <div className="p-4 sm:p-5 flex items-center gap-4 cursor-pointer" onClick={() => setExpanded(e => !e)}>
        <div className="rounded-lg px-3 py-2 text-center font-mono2 shrink-0" style={{ background: C.hardwoodSoft }}>
          <div className="text-lg font-bold leading-none" style={{ color: C.rim }}>{parts.day}</div>
          <div className="text-xs tracking-widest" style={{ color: C.paintDim }}>{parts.month}</div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-display text-lg uppercase truncate" style={{ color: C.paint }}>{event.title}</div>
          <div className="text-xs flex flex-wrap gap-x-3 gap-y-1 mt-1" style={{ color: C.paintDim }}>
            {event.location && <span className="flex items-center gap-1"><MapPin size={11} />{event.location}</span>}
            <span>{accepted.length}{event.capacity ? ` / ${event.capacity}` : ''} rostered</span>
            <span>{applicants.length} pending</span>
          </div>
        </div>
        <Badge status={event.status === 'closed' ? 'closed' : (event.capacity && accepted.length >= event.capacity ? 'full' : 'open')} />
        <ChevronDown size={18} style={{ color: C.paintDim, transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
      </div>
      {expanded && (
        <div className="border-t p-4 sm:p-5 space-y-6" style={{ borderColor: C.line }}>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setEditing(true)} className="text-xs flex items-center gap-1.5 px-3 py-1.5 rounded-lg border" style={{ borderColor: C.line, color: C.paintDim }}><Pencil size={12} />Edit</button>
            <button onClick={() => onToggleStatus(event.id)} className="text-xs flex items-center gap-1.5 px-3 py-1.5 rounded-lg border" style={{ borderColor: C.line, color: C.paintDim }}>
              {event.status === 'closed' ? <LogIn size={12} /> : <Lock size={12} />}
              {event.status === 'closed' ? 'Reopen Signups' : 'Close Signups'}
            </button>
            <button onClick={() => confirmDelete ? onDelete(event.id) : setConfirmDelete(true)} className="text-xs flex items-center gap-1.5 px-3 py-1.5 rounded-lg border" style={{ borderColor: confirmDelete ? C.foul : C.line, color: confirmDelete ? C.foul : C.paintDim }}>
              <Trash2 size={12} />{confirmDelete ? 'Click Again To Delete' : 'Delete Event'}
            </button>
          </div>

          {event.description && <p className="text-sm" style={{ color: C.paintDim }}>{event.description}</p>}

          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs font-mono2 uppercase tracking-wide" style={{ color: C.paintDim }}>Applicants ({applicants.length})</div>
              {applicants.length > 0 && (
                <button onClick={() => setReviewMode(v => !v)} className="text-xs flex items-center gap-1.5 px-2.5 py-1 rounded-lg border" style={{ borderColor: reviewMode ? C.rim : C.line, color: reviewMode ? C.rim : C.paintDim }}>
                  <Trophy size={12} />{reviewMode ? 'List View' : 'Review Mode'}
                </button>
              )}
            </div>
            {applicants.length === 0 ? (
              <div className="text-sm" style={{ color: C.paintDim }}>No applicants yet.</div>
            ) : reviewMode ? (
              <ApplicantReviewMode applicants={applicants} questions={event.questions || []} onAccept={onAccept} onReject={onReject} onExit={() => setReviewMode(false)} onOpenDetail={(id) => setDetail({ list: 'applicants', id })} />
            ) : (
              <div className="stagger space-y-2">
                {applicants.map(a => (
                  <PlayerCard key={a.id} data={a} compact questions={event.questions || []} onOpen={() => setDetail({ list: 'applicants', id: a.id })} actions={
                    <div className="flex gap-1.5 shrink-0">
                      <button onClick={() => onAccept(a.id)} className="p-2 rounded-lg" style={{ background: 'rgba(229,38,44,0.15)', color: C.rim }} title="Accept"><Check size={15} /></button>
                      <button onClick={() => onReject(a.id)} className="p-2 rounded-lg" style={{ background: 'rgba(196,35,46,0.10)', color: C.foul }} title="Pass"><X size={15} /></button>
                    </div>
                  } />
                ))}
              </div>
            )}
          </div>

          <div>
            <div className="text-xs font-mono2 uppercase tracking-wide mb-3" style={{ color: C.paintDim }}>Roster ({accepted.length})</div>
            {accepted.length === 0 ? (
              <div className="text-sm" style={{ color: C.paintDim }}>No one's been accepted yet.</div>
            ) : (
              <div className="stagger space-y-2">
                {accepted.map(a => (
                  <PlayerCard key={a.id} data={a} compact questions={event.questions || []} onOpen={() => setDetail({ list: 'accepted', id: a.id })} actions={
                    <button onClick={() => onReconsider(a.id)} className="text-xs px-2.5 py-1.5 rounded-lg shrink-0" style={{ color: C.paintDim }}>Remove</button>
                  } />
                ))}
              </div>
            )}
          </div>

          {rejected.length > 0 && (
            <div>
              <div className="text-xs font-mono2 uppercase tracking-wide mb-3" style={{ color: C.paintDim }}>Passed On ({rejected.length})</div>
              <div className="stagger space-y-2">
                {rejected.map(a => (
                  <PlayerCard key={a.id} data={a} compact questions={event.questions || []} onOpen={() => setDetail({ list: 'rejected', id: a.id })} actions={
                    <button onClick={() => onReconsider(a.id)} className="text-xs flex items-center gap-1 px-2.5 py-1.5 rounded-lg shrink-0" style={{ color: C.paintDim }}><RefreshCw size={11} />Reconsider</button>
                  } />
                ))}
              </div>
            </div>
          )}

          <div className="rounded-lg p-4" style={{ background: C.hardwoodSoft }}>
            <div className="flex items-center justify-between flex-wrap gap-3 mb-1">
              <div className="text-xs font-mono2 uppercase tracking-wide flex items-center gap-1.5" style={{ color: C.paint }}><Shuffle size={13} />Auto Team Assigner</div>
              <div className="flex items-center gap-2">
                <label className="text-xs" style={{ color: C.paintDim }}>Teams</label>
                <input type="number" min={2} max={Math.max(2, accepted.length)} value={numTeams} onChange={e => setNumTeams(Number(e.target.value))} className="w-16 rounded-lg px-2 py-1.5 border text-sm" style={{ background: C.inkSoft, borderColor: C.line, color: C.paint }} />
                <button disabled={accepted.length < 2 || assigning} onClick={() => onAssignTeams(event.id, numTeams)} className="text-xs font-semibold px-3 py-1.5 rounded-lg disabled:opacity-40 flex items-center gap-1.5" style={{ background: C.rim, color: C.onRim }}>
                  {assigning ? <Loader2 size={13} className="animate-spin" /> : <Shuffle size={13} />}
                  {event.teams ? 'Re-Assign' : 'Assign Teams'}
                </button>
              </div>
            </div>
            {accepted.length < 2 && <div className="text-xs mt-1" style={{ color: C.paintDim }}>Accept at least 2 players to assign teams.</div>}
            {event.teams && (
              <div className="grid sm:grid-cols-2 gap-3 mt-4">
                {event.teams.map(team => (
                  <div key={team.id} className="rounded-lg p-3" style={{ background: C.inkSoft }}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-display uppercase" style={{ color: C.paint }}>{team.name}</div>
                      <div className="text-xs font-mono2" style={{ color: C.paintDim }}>AVG {team.avgScore}</div>
                    </div>
                    <div className="space-y-1">
                      {team.players.map(pid => {
                        const p = signupsById[pid];
                        return p ? (
                          <div key={pid} className="text-sm flex items-center gap-1.5" style={{ color: C.paintDim }}>
                            <User size={11} />{p.robloxUsername}
                          </div>
                        ) : null;
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      {detailPlayer && (
        <ApplicantDetail
          applicant={detailPlayer}
          event={event}
          accepted={accepted}
          index={detailIndex}
          total={detailList.length}
          onPrev={() => stepDetail(-1)}
          onNext={() => stepDetail(1)}
          onAccept={actOnDetail(onAccept)}
          onReject={actOnDetail(onReject)}
          onReconsider={(id) => { onReconsider(id); setDetail(null); }}
          onClose={() => setDetail(null)}
        />
      )}
    </div>
  );
}

/* ============ HANDLER DASHBOARD ============ */
function HandlerDashboard({ session, events, signups, onLogout, onCreateEvent, onEditEvent, onDeleteEvent, onToggleEventStatus, onAccept, onReject, onReconsider, onAssignTeams, creatingEvent, assigningEventId, onRefresh, refreshing }) {
  const [showCreate, setShowCreate] = useState(false);
  const signupsById = useMemo(() => {
    const map = {};
    signups.forEach(s => { map[s.id] = s; });
    return map;
  }, [signups]);
  const sortedEvents = useMemo(() => [...events].sort((a, b) => (a.date || '').localeCompare(b.date || '')), [events]);

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex items-center justify-between mb-8 gap-3">
        <div>
          <div className="text-xs font-mono2 uppercase tracking-wide" style={{ color: C.paintDim }}>Handler Dashboard</div>
          <h2 className="font-display text-2xl uppercase" style={{ color: C.paint }}>Welcome, {session.username}</h2>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button onClick={onRefresh} disabled={refreshing} className="flex items-center gap-1.5 text-sm px-3 py-2 rounded-lg border" style={{ borderColor: C.line, color: C.paintDim }}>
            <RefreshCw size={14} className={refreshing ? 'animate-spin' : ''} /> Refresh
          </button>
          <button onClick={onLogout} className="flex items-center gap-1.5 text-sm px-3 py-2 rounded-lg border" style={{ borderColor: C.line, color: C.paintDim }}>
            <LogOut size={14} /> Log Out
          </button>
        </div>
      </div>

      {showCreate ? (
        <div className="mb-8">
          <EventForm onSave={(f) => { onCreateEvent(f); setShowCreate(false); }} onCancel={() => setShowCreate(false)} busy={creatingEvent} />
        </div>
      ) : (
        <button onClick={() => setShowCreate(true)} className="mb-8 flex items-center gap-2 text-sm font-semibold px-4 py-3 rounded-lg" style={{ background: C.rim, color: C.onRim }}>
          <Plus size={16} /> New Event
        </button>
      )}

      {sortedEvents.length === 0 ? (
        <div className="rounded-xl border p-10 text-center" style={{ borderColor: C.line, color: C.paintDim }}>
          No events yet. Create the first one above.
        </div>
      ) : (
        <div className="space-y-4">
          {sortedEvents.map(ev => {
            const evSignups = signups.filter(s => s.eventId === ev.id);
            const applicants = evSignups.filter(s => s.status === 'pending');
            const accepted = evSignups.filter(s => s.status === 'accepted');
            const rejected = evSignups.filter(s => s.status === 'rejected');
            return (
              <EventManagerRow
                key={ev.id}
                event={ev}
                applicants={applicants}
                accepted={accepted}
                rejected={rejected}
                signupsById={signupsById}
                onAccept={onAccept}
                onReject={onReject}
                onReconsider={onReconsider}
                onAssignTeams={onAssignTeams}
                onDelete={onDeleteEvent}
                onEdit={onEditEvent}
                onToggleStatus={onToggleEventStatus}
                assigning={assigningEventId === ev.id}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

/* ============ APP ============ */
function App() {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [events, setEvents] = useState([]);
  const [signups, setSignups] = useState([]);
  const [handlers, setHandlers] = useState([]);
  const [session, setSession] = useState(null);
  const [view, setView] = useState('home');
  const [preselectedEventId, setPreselectedEventId] = useState('');
  const [toast, setToast] = useState(null);
  const [statusOpen, setStatusOpen] = useState(false);
  const [submittingSignup, setSubmittingSignup] = useState(false);
  const [authBusy, setAuthBusy] = useState(false);
  const [creatingEvent, setCreatingEvent] = useState(false);
  const [assigningEventId, setAssigningEventId] = useState('');
  const toastTimer = useRef(null);

  const pushToast = (msg, type = 'success') => {
    setToast({ msg, type });
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 3500);
  };

  const safeGet = async (key) => {
    try {
      const res = await storage.get(key);
      return res ? JSON.parse(res.value) : [];
    } catch {
      return [];
    }
  };

  const refreshSignups = async () => {
    setSignups(await safeGet(STORAGE_KEYS.SIGNUPS));
  };

  const refreshData = async (showSpinner) => {
    if (showSpinner) setRefreshing(true);
    const [ev, su, ha] = await Promise.all([
      safeGet(STORAGE_KEYS.EVENTS),
      safeGet(STORAGE_KEYS.SIGNUPS),
      safeGet(STORAGE_KEYS.HANDLERS),
    ]);
    setEvents(ev);
    setSignups(su);
    setHandlers(ha);
    if (showSpinner) setRefreshing(false);
  };

  useEffect(() => {
    let mounted = true;
    (async () => {
      await refreshData(false);
      if (mounted) setLoading(false);
    })();
    return () => { mounted = false; };
  }, []);

  // Handlers can have this dashboard open for a while as signups come in —
  // refetch periodically so new applicants show up without a manual reload.
  useEffect(() => {
    if (view !== 'handlerDashboard') return;
    const t = setInterval(() => refreshData(false), 20000);
    return () => clearInterval(t);
  }, [view]);

  const persist = async (key, data, setter) => {
    try {
      const res = await storage.set(key, JSON.stringify(data));
      if (!res) throw new Error('save failed');
      setter(data);
      return true;
    } catch {
      pushToast('Could not save changes. Check your connection and try again.', 'error');
      return false;
    }
  };

  const goHome = () => setView('home');
  const goSignup = (eventId = '') => { setPreselectedEventId(eventId); setView('signup'); };
  const goStaff = () => setView(session ? 'handlerDashboard' : 'handlerAuth');
  const goEvents = () => {
    setView('home');
    setTimeout(() => {
      const el = document.getElementById('events');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const submitSignup = async (form) => {
    setSubmittingSignup(true);
    const newSignup = {
      id: uid(),
      eventId: form.eventId,
      robloxUsername: form.robloxUsername.trim(),
      discord: form.discord.trim(),
      position: form.position,
      playstyle: form.playstyle,
      passing: form.passing,
      comp: form.comp,
      availability: form.availability,
      notes: form.notes.trim(),
      customAnswers: form.customAnswers || {},
      status: 'pending',
      submittedAt: new Date().toISOString(),
    };
    try {
      await storage.appendSignup(newSignup);
    } catch {
      setSubmittingSignup(false);
      pushToast('Could not save your signup. Check your connection and try again.', 'error');
      return false;
    }
    /* Pull the list back down rather than appending locally — this page may
       have been open a while, and the server copy is the real one now. */
    await refreshSignups();
    setSubmittingSignup(false);
    pushToast("You're on the board!");
    return true;
  };

  const loginHandler = async (username, password) => {
    setAuthBusy(true);
    const hash = await hashPassword(username, password);
    const found = handlers.find(h => h.username.toLowerCase() === username.toLowerCase() && h.passwordHash === hash);
    setAuthBusy(false);
    if (found) { setSession({ username: found.username }); setView('handlerDashboard'); return { ok: true }; }
    return { ok: false, message: 'Wrong username or password.' };
  };

  const logout = () => { setSession(null); setView('home'); };

  const createEvent = async (f) => {
    setCreatingEvent(true);
    const newEvent = {
      id: uid(),
      title: f.title.trim(),
      date: f.date,
      time: f.time,
      location: f.location.trim(),
      capacity: f.capacity ? Number(f.capacity) : null,
      description: f.description.trim(),
      photo: f.photo || '',
      questions: f.questions || [],
      askPosition: f.askPosition !== false,
      askPlaystyle: f.askPlaystyle !== false,
      askPassing: f.askPassing !== false,
      askComp: f.askComp !== false,
      status: 'open',
      teams: null,
      createdBy: session ? session.username : 'staff',
      createdAt: new Date().toISOString(),
    };
    const ok = await persist(STORAGE_KEYS.EVENTS, [...events, newEvent], setEvents);
    setCreatingEvent(false);
    if (ok) pushToast('Event created.');
  };

  const editEvent = async (id, f) => {
    const updated = events.map(e => e.id === id ? { ...e, title: f.title.trim(), date: f.date, time: f.time, location: f.location.trim(), capacity: f.capacity ? Number(f.capacity) : null, description: f.description.trim(), photo: f.photo || '', questions: f.questions || [], askPosition: f.askPosition !== false, askPlaystyle: f.askPlaystyle !== false, askPassing: f.askPassing !== false, askComp: f.askComp !== false } : e);
    const ok = await persist(STORAGE_KEYS.EVENTS, updated, setEvents);
    if (ok) pushToast('Event updated.');
  };

  const deleteEvent = async (id) => {
    const ok = await persist(STORAGE_KEYS.EVENTS, events.filter(e => e.id !== id), setEvents);
    if (ok) {
      pushToast('Event deleted.');
      /* This one genuinely has to rewrite the whole list, so read the current
         copy first — otherwise it would roll back any signup that arrived
         after this dashboard was loaded. */
      const current = await safeGet(STORAGE_KEYS.SIGNUPS);
      await persist(STORAGE_KEYS.SIGNUPS, current.filter(s => s.eventId !== id), setSignups);
    }
  };

  const toggleEventStatus = async (id) => {
    const updated = events.map(e => e.id === id ? { ...e, status: e.status === 'closed' ? 'open' : 'closed' } : e);
    await persist(STORAGE_KEYS.EVENTS, updated, setEvents);
  };

  const setSignupStatus = async (id, status) => {
    /* Update locally first so review mode stays snappy, then confirm against
       the server. A stale list can no longer wipe out other people's signups —
       only this one record is touched. */
    const previous = signups;
    setSignups(signups.map(s => (s.id === id ? { ...s, status } : s)));
    try {
      await storage.updateSignupStatus(id, status);
    } catch {
      setSignups(previous);
      pushToast('Could not save that. Check your connection and try again.', 'error');
      return;
    }
    await refreshSignups();
  };

  const assignTeamsForEvent = async (eventId, numTeamsInput) => {
    setAssigningEventId(eventId);
    const acceptedForEvent = signups.filter(s => s.eventId === eventId && s.status === 'accepted');
    const teams = assignTeams(acceptedForEvent, numTeamsInput);
    const updated = events.map(e => e.id === eventId ? { ...e, teams, teamsAssignedAt: new Date().toISOString() } : e);
    const ok = await persist(STORAGE_KEYS.EVENTS, updated, setEvents);
    setAssigningEventId('');
    if (ok) pushToast('Teams assigned.');
  };

  const openEvents = useMemo(() => events.filter(e => e.status !== 'closed'), [events]);
  const acceptedCounts = useMemo(() => {
    const m = {};
    signups.forEach(s => { if (s.status === 'accepted') m[s.eventId] = (m[s.eventId] || 0) + 1; });
    return m;
  }, [signups]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center relative">
        <GlobalStyles />
        <AmbientCourt />
        <Loader2 size={28} className="animate-spin relative z-10" color={C.rim} />
      </div>
    );
  }

  return (
    <div className="min-h-screen font-body relative">
      <GlobalStyles />
      <AmbientCourt />
      {/* everything above the court field */}
      <div className="relative" style={{ zIndex: 1 }}>
      {!REMOTE_ENABLED && (
        <div className="text-xs font-mono2 text-center py-2 px-4" style={{ background: C.hardwoodSoft, color: C.paintDim }}>
          Demo mode — events and signups save to this browser only. See README.md to connect shared storage.
        </div>
      )}
      <NavBar session={session} onHome={goHome} onEvents={goEvents} onStatus={() => setStatusOpen(true)} onSignup={() => goSignup()} onStaff={goStaff} />
      {toast && <ToastBanner toast={toast} />}
      {statusOpen && <StatusModal events={events} signups={signups} onClose={() => setStatusOpen(false)} />}
      <main>
        {view === 'home' && (
          <>
            <Hero onSignup={() => goSignup()} onStaff={goStaff} />
            <EventsStrip events={openEvents} acceptedCounts={acceptedCounts} onSignupClick={goSignup} />
          </>
        )}
        {view === 'signup' && (
          <SignupFlow openEvents={openEvents} initialEventId={preselectedEventId} onSubmit={submitSignup} onCancel={goHome} submitting={submittingSignup} signups={signups} />
        )}
        {view === 'handlerAuth' && (
          <HandlerAuth onLogin={loginHandler} busy={authBusy} />
        )}
        {view === 'handlerDashboard' && session && (
          <HandlerDashboard
            session={session}
            events={events}
            signups={signups}
            onLogout={logout}
            onCreateEvent={createEvent}
            onEditEvent={editEvent}
            onDeleteEvent={deleteEvent}
            onToggleEventStatus={toggleEventStatus}
            onAccept={(id) => setSignupStatus(id, 'accepted')}
            onReject={(id) => setSignupStatus(id, 'rejected')}
            onReconsider={(id) => setSignupStatus(id, 'pending')}
            onAssignTeams={assignTeamsForEvent}
            creatingEvent={creatingEvent}
            assigningEventId={assigningEventId}
            onRefresh={() => refreshData(true)}
            refreshing={refreshing}
          />
        )}
      </main>
      <Footer />
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
