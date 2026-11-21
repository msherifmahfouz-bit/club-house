# Clubhouse website

A responsive Next.js + Supabase starter for a university club portal. It includes an invite-only sign-in screen and role-aware member/head dashboard UI for overview, activities, teams, leaderboard, wallet, rewards and member management.

## Important status
The visual dashboard is implemented. Some displayed dashboard values and activity/reward/member lists are preview/demo data at this stage. The sign-in flow uses Supabase Auth and reads the signed-in user's row from `public.profiles`. Creating activities and requesting rewards currently show a preview notice and do not write to the database yet. Do not treat demo balances, leaderboard positions, or sample transactions as real club records.

## Setup
1. Install Node.js 20 or later.
2. Copy `.env.example` to `.env.local` and set your Supabase Project URL and publishable key.
3. Install packages with `npm install`.
4. Start locally with `npm run dev` and open `http://localhost:3000`.

## Supabase profile expectation
The app expects `public.profiles` to contain a row whose `id` matches the authenticated user's UUID, plus `display_name` (or `full_name`) and `role` (`head` or `member`). Create/invite users from Supabase Authentication. Assign the Head role only from the Supabase dashboard/SQL editor as a trusted administrator; never expose a service-role key in the browser.

## Deployment
Import this folder into a private GitHub repository, then import that repository into Vercel. Add the two `NEXT_PUBLIC_SUPABASE_*` environment variables in Vercel before deploying.
