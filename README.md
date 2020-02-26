# Gear Life MTG

This is a opensource WebApp to manage **Magic: The Gathering** matches

To access go to https://gearlife.maxfs.com

## Features

- Life counter
- Poison counter
- Roll d6 dice per planeswalker
- Match planeswalker sorter
- Deck colorset selection per planeswalker (including colorless)
- Standard format support (20 life points, 10 poison)
- Standard free-for-all up to 10 planeswalkers
- Offline support
- Team management
- Multi formats
  - Two headed giant (30 life points, 15 poison)
  - Commander (30 life points, 15 poison)
  - Free-for-all extended (30 life points, 15 poison)
  - Emperor (20 life points, 10 poison)
 

## Roadmap

- [ ] Match history (Mar/2020)
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
