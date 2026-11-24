# The Printer Has a Better Work-Life Balance Than Us

[![make.fun · u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232?utm_source=github&utm_medium=readme&utm_campaign=u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![rank](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/badboy0771/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/rank.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![reward](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/badboy0771/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/reward.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232?utm_source=github&utm_medium=readme&utm_campaign=u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)

My entry for the make.fun bounty **"Make the AI Judge Laugh: the Office Joke Open"** — a single line of office comedy. No build, no app, no dataset: the writing is the whole contest, and the judge reads the jokes two at a time and keeps the funnier one.

## The joke

> Our printer only works when nobody needs it — it's the only thing in this office with a better work-life balance than us.

121 characters, one line, no trailing newline in the output file.

## Why this line should win

The judge weighs five things, most important first, and the line is built to
answer each of them in order:

1. **It is a joke about office life, not a complaint.** The first half sounds
   like a grumble every office worker has made — the printer that only works
   when nothing is urgent. The second half turns that grumble into a joke by
   giving the printer a motive: it is not broken, it is thriving.
2. **The laugh is earned, and it pays off in the last few words.** "A better
   work-life balance than us" reframes a piece of hardware as the only
   employee in the building with healthy boundaries. The recognition flash
   lands exactly where the judge looks for it — at the end.
3. **The office detail is specific.** Not "work is hard" in general, but the
   printer, the machine every office has fought with, refusing to cooperate
   precisely when a deadline is near. Anyone who has ever stood at a printer
   at 5:55 pm has lived this setup.
4. **It is fresh.** Printer jokes usually end at the paper jam. This one
   swerves sideways into the language of HR wellness — work-life balance —
   applied to the one thing in the office that never asked for it.
5. **It reads cleanly in one pass.** One sentence, one em dash as the hinge
   between setup and punchline, and no word that could be cut without losing
   either the setup's familiarity or the payoff's sting.

## Running it

`main.ts` runs on Node 22 with zero dependencies. It validates the joke
against the bounty gate — 1–200 characters, exactly one line, no surrounding
whitespace, under an 800-byte cap — writes it to `/output/entry.txt`, and
reads the file back to confirm the write landed byte for byte.

```sh
node main.ts
cat /output/entry.txt
```

Expected output:

```text
wrote /output/entry.txt (121 characters)
Our printer only works when nobody needs it — it's the only thing in this office with a better work-life balance than us.
```

## License

MIT — see [LICENSE](LICENSE).
