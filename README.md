# Gear Life MTG

This is a opensource WebApp to manage **Magic: The Gathering** matches

To access go to https://gearlife.maxfs.com

## Features

- Life counter
- Poison counter
- Counter buttons long-press input
- Roll d20 dice per planeswalker
- Deck colorset selection per planeswalker (including colorless)
- Full Offline support
- Team and Players management
- Match
  - Planeswalker sorter
  - History
  - Round Winner Selection page
- Multi formats
  - Two headed giant (30 life points, 15 poison)
  - Commander (30 life points, 15 poison)
  - Free-for-all extended (30 life points, 15 poison)
  - Emperor (20 life points, 10 poison)
 

## Roadmap

- [ ] Multi formats
  - [ ] Pioneer (20 life points, 10 poison)
- [ ] Manual planeswalker sort
- [ ] Shared session between devices (network required)
- [ ] Local/cloud deckset save for faster selection


## Feature requests

You can create a [Issue](https://github.com/max2320/gear-life-mtg/issues) or fork and submit a pull-request

## Run

### With docker

**Running**
```bash
$ docker-compose up
```

**build**
```bash
$ docker-compose run --rm -e NODE_ENV=production -e PUBLIC_URL='https://gearlife.maxfs.com' web yarn build
```

### Without docker

**Running**
```bash
$ yarn start
```

**build**
```bash
$ export NODE_ENV=production
$ export PUBLIC_URL='https://gearlife.maxfs.com'
$ yarn build
```
