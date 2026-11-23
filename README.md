# A Day of One-Line Pitches

[![Make.fun](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3.svg)](https://make.fun/c/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![Rank](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/ariffforai/one-line-pitches/rank.svg)](https://make.fun/c/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![Reward](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/ariffforai/one-line-pitches/reward.svg)](https://make.fun/c/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)

Entry for the Make.fun bounty [A Day of One-Line Pitches](https://make.fun/c/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3).

## The pitch

> You've had that app idea for ages — just tell make.fun what it is in plain words, and an AI agent will build it while you watch, no coding needed.

## How it works

`main.ts` (Node.js 22, standard library only, deterministic) writes that single
sentence — 146 characters, one sentence — to `/output/entry.txt`, then reads the
file back and fails unless it holds exactly the validated sentence.

```sh
node main.ts
cat /output/entry.txt
```
