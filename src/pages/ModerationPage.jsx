// /moderation — очередь отзывов и наблюдений посетителей.
// Не связана с меню сайта. Вход — e-mail и пароль модератора Supabase
// (см. supabase/README.md). В демо-режиме вход не нужен.

import { useCallback, useEffect, useState } from 'react';
import { Check, Inbox, LogOut, Star, Trash2, X } from 'lucide-react';
import { navigate } from '../router';
import {
  MODE,
  currentModerator,
  listForModeration,
  moderatorSignIn,
  moderatorSignOut,
  remove,
  setStatus,
} from '../community/api';
import '../community/CommunitySection.css';

const TABS = [
  { id: 'pending', label: 'Waiting' },
  { id: 'approved', label: 'Published' },
  { id: 'rejected', label: 'Rejected' },
];

const PAGE_PATH = { park: '/park/', city: '/city/', route: '/route/', animal: '/wildlife/' };

function LoginForm({ onDone }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setBusy(true);
    setError('');
    try {
      await moderatorSignIn(email, password);
      onDone();
    } catch (err) {
      setError(err?.message ?? 'Sign-in failed.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} className="community-form glass glass--sm mx-auto max-w-[380px] space-y-4 rounded-2xl p-6">
      <p className="type-stat text-lg text-white">Moderator sign-in</p>
      <label className="block">
        <span className="community-label">E-mail</span>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="username" />
      </label>
      <label className="block">
        <span className="community-label">Password</span>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
      </label>
      {error && <p className="community-error">{error}</p>}
      <button
        type="submit"
        disabled={busy}
        className="w-full rounded-full bg-[#38a169] px-5 py-3 text-sm font-semibold text-[#070D19] disabled:opacity-60"
      >
        {busy ? 'Signing in…' : 'Sign in'}
      </button>
    </form>
  );
}

export default function ModerationPage() {
  const [user, setUser] = useState(undefined); // undefined = проверяем
  const [tab, setTab] = useState('pending');
  const [rows, setRows] = useState([]);
  const [error, setError] = useState('');

  const checkUser = useCallback(() => {
    currentModerator().then(setUser).catch(() => setUser(null));
  }, []);

  useEffect(checkUser, [checkUser]);

  useEffect(() => {
    if (!user || user.notModerator) return undefined;
    let cancelled = false;
    listForModeration(tab)
      .then((data) => {
        if (cancelled) return;
        setRows(data);
        setError('');
      })
      .catch((err) => !cancelled && setError(err?.message ?? 'Could not load.'));
    return () => {
      cancelled = true;
    };
  }, [user, tab]);

  async function act(row, action) {
    try {
      if (action === 'delete') {
        if (!window.confirm('Delete this post permanently?')) return;
        await remove(row);
      } else {
        await setStatus(row, action);
      }
      setRows((r) => r.filter((x) => x.id !== row.id));
    } catch (err) {
      setError(err?.message ?? 'Action failed.');
    }
  }

  return (
    <div className="min-h-screen bg-[#070D19] text-[#EBF0F4]">
      <main className="mx-auto max-w-[980px] space-y-8 px-6 py-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="type-tag text-[11px] tracking-[0.14em] text-[#6ee7a1]">Still Wilds</p>
            <h1 className="text-[34px]">Community Moderation</h1>
            <p className="text-sm text-gray-500">
              Visitor tips and sightings appear on the site only after you approve them.
              {MODE === 'demo' && ' · Demo mode (local browser only)'}
            </p>
          </div>
          {user && MODE === 'supabase' && (
            <button
              type="button"
              onClick={async () => {
                await moderatorSignOut();
                setUser(null);
              }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs text-gray-300"
            >
              <LogOut className="h-4 w-4" /> Sign out
            </button>
          )}
        </div>

        {MODE === 'off' && <p className="text-gray-400">Community features are not configured (no Supabase keys).</p>}

        {MODE !== 'off' && user === undefined && <p className="text-gray-500">Checking…</p>}
        {MODE !== 'off' && user === null && <LoginForm onDone={checkUser} />}
        {user?.notModerator && (
          <p className="text-[#f0a07a]">This account is signed in but is not a moderator. Add it to the moderators table (see supabase/README.md).</p>
        )}

        {user && !user.notModerator && (
          <>
            <div className="flex gap-2">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTab(t.id)}
                  className={`rounded-full border px-4 py-2 text-xs ${tab === t.id ? 'border-[#38a169] bg-[#38a169]/15 text-[#6ee7a1]' : 'border-white/15 text-gray-400'}`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {error && <p className="community-error">{error}</p>}

            {rows.length === 0 && (
              <div className="glass glass--sm flex items-center gap-3 rounded-2xl p-6 text-sm text-gray-400">
                <Inbox className="h-5 w-5" /> Nothing here.
              </div>
            )}

            <div className="space-y-4">
              {rows.map((r) => (
                <article key={r.id} className="glass glass--sm rounded-2xl p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-gray-500">
                    <button
                      type="button"
                      onClick={() => navigate(`${PAGE_PATH[r.page_type]}${r.page_slug}`)}
                      className="type-tag rounded-full border border-white/15 px-3 py-1 text-[10px] tracking-[0.08em] text-gray-300 hover:border-white/30"
                    >
                      {r.kind === 'review' ? 'Tip' : 'Sighting'} · {r.page_type}/{r.page_slug}
                    </button>
                    <span>{new Date(r.created_at).toLocaleString()}</span>
                  </div>
                  <p className="type-stat mt-3 text-sm text-white">
                    {r.author_name}
                    {r.rating ? (
                      <span className="ml-2 inline-flex items-center gap-1 text-[#e0b84a]">
                        <Star className="h-3.5 w-3.5" fill="#e0b84a" /> {r.rating}/5
                      </span>
                    ) : null}
                  </p>
                  <p className="text-[11px] text-gray-500">
                    {[r.place, r.visit_month?.slice(0, 7)].filter(Boolean).join(' · ')}
                  </p>
                  <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-gray-300">{r.body}</p>

                  {r.photoUrls?.length > 0 && (
                    <div className="mt-4 grid grid-cols-3 gap-2 sm:max-w-[520px]">
                      {r.photoUrls.map((url, i) => (
                        <a key={url} href={url} target="_blank" rel="noopener noreferrer" className="overflow-hidden rounded-xl">
                          <img src={url} alt={`Photo ${i + 1}`} className="h-28 w-full object-cover" />
                        </a>
                      ))}
                    </div>
                  )}
                  {r.photoUrls?.length > 0 && r.status !== 'approved' && (
                    <p className="mt-2 text-[11px] text-gray-500">Check photos too: no feeding or close approach, no strangers’ faces, nothing that reveals an exact wildlife location.</p>
                  )}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {r.status !== 'approved' && (
                      <button type="button" onClick={() => act(r, 'approved')} className="inline-flex items-center gap-1.5 rounded-full bg-[#38a169] px-4 py-2 text-xs font-semibold text-[#070D19]">
                        <Check className="h-4 w-4" /> Approve
                      </button>
                    )}
                    {r.status !== 'rejected' && (
                      <button type="button" onClick={() => act(r, 'rejected')} className="inline-flex items-center gap-1.5 rounded-full border border-[#e08a4a]/50 px-4 py-2 text-xs text-[#f0b98a]">
                        <X className="h-4 w-4" /> {r.status === 'approved' ? 'Unpublish' : 'Reject'}
                      </button>
                    )}
                    <button type="button" onClick={() => act(r, 'delete')} className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-xs text-gray-400">
                      <Trash2 className="h-4 w-4" /> Delete
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
