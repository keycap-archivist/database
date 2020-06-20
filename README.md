# Keycap Archivist Database

![Discord](https://img.shields.io/discord/707159843751854141)

See the [WIKI](https://github.com/keycap-archivist/database/wiki) to parse the catalog.

Database currently contains:
- Artists : 44
- Sculpts : 566
- Colorways : 15208

CSV/JSON database of artisan keycaps based on : [https://keycap.info/](https://keycap.info/)

Synchronization is done on a daily basis using a cron github action. If there is a change, the database update itself.

## Develop

To use you need to declare a Google API Key for Drive and export it as an env variable `G_API_KEY`

## Usage

To use the master version of the catalog you can CURL those urls:

- [csv](https://raw.githubusercontent.com/keycap-archivist/database/master/db/catalog.csv)
- [json](https://raw.githubusercontent.com/keycap-archivist/database/master/db/catalog.json)

## Source Catalogs

| Catalog | Url |
| --- | --- |
| Alpha Keycaps | [link](https://alphakeycaps.com/) |
| Archetype | [link](https://docs.google.com/document/d/1A8WdP-pS82xPQuxw98EuOyfmAncqlPLmLtzS2uujfWg) |
| Artkey | [link](https://docs.google.com/document/d/1piD-uC3eAwy0dkqxnsZoYr_-AnezmelpFnHfuK3RslM) |
| Backward Caps | [link](https://docs.google.com/document/d/1eHoHMjOIaZv57h3XgOfamgWaE4nfMbFKLj827XNKSac) |
| Bad and Booj Keys | [link](https://docs.google.com/document/d/15OgzFWmOJWM5h0JBMV85041Vjd88lNXfj6cWkwd-BFM) |
| Bad Habit Caps | [link](https://docs.google.com/document/d/1MUoyBLW1slC819V1IdDa2eAV5adU2IHGa5YjmFY5w88) |
| Bludgeoned Kaps | [link](https://docs.google.com/document/d/1KKMT4uvPquXcrWF1dX3p3R-PJ_0A98oUO2kwkNvLOd8) |
| BoomSnap Caps | [link](https://docs.google.com/document/d/1Uj-JdFhGKaEhKw7-O3HGzzrNctD1c4a8zwC6lezk9nQ) |
| Booper-Omniclectic | [link](https://docs.google.com/document/d/18QS_4zYR3rFtGLLV1fPZCce5vc6i8_3kauY36xUtTdk) |
| BrewCaps | [link](https://docs.google.com/document/d/1ibnukzm73aRIkBm83OhmPsT6wdyA1GH3MRQ6FPBkOSA) |
| Bro Caps | [link](https://docs.google.com/document/d/1SLiSnTXJXR6X5jT5VnmAe4e3K2yFgZosxBUY1kQQKwo) |
| C.Y.O Keycaps | [link](https://docs.google.com/document/d/1Rhig59IdZh5IZ3JP3R_FjZncRxo2M5tfPiUyxJBuLq8) |
| Clack Factory | [link](https://docs.google.com/document/d/1C9I7PaXFtpNzI8Zb_6ZTjHLMrQ8ERyWn_IvMD8mVoq0) |
| CozCaps | [link](https://docs.google.com/document/d/14EBfRe0AxEbCok856_HrL6teQAlkeQL3kpa3z8lenTc) |
| CYSM | [link](https://docs.google.com/document/d/1c0H4ABr3csHH5B9WP7yyKfCcjLvBE7aJrNwlQzcczcI) |
| Deathcaps | [link](https://docs.google.com/document/d/1Y1Ip37QbnjNNiOYEAvbv9KVz9A74DFEufDDF22F1OvA) |
| Dollartacos | [link](https://docs.google.com/document/d/1iAaGXFW6zqBa8lx6sKyQmKTvtiDA1zEiAM4jR4zd-Bs) |
| Fraktal Kaps | [link](https://docs.google.com/document/d/13LmVzCkuN7uGhair0QXq1sJkI7LK6jBs-uhnVU-hDII) |
| Frumpzkeys | [link](https://docs.google.com/document/d/15arZPVtJHvLxrF20l_Oc-cZCwZrwtMI_SyiD2KDsvWg) |
| Goldenstar Keycap | [link](https://docs.google.com/document/d/1rCP_Nn_PQeMiqsFlJ2_8TvFHFPsTpq90-QPgDBo7H40) |
| Gothcaps | [link](https://docs.google.com/document/d/17YdYcvKifysUDk6mt750Jgq7Zke2kSi66kfqc9BE6RQ) |
| Grimey as Fuck | [link](https://docs.google.com/document/d/1AdPXkALzPErnyMQZrWDJ6o-jCvFB34XeZyz00FDDvLY) |
| Hello Caps | [link](https://docs.google.com/document/d/1r_RNJJW5uagd8SL47-c_b_lvb2TuxBsqU6zJhFzs2Vk) |
| Hunger Work Studio | [link](https://docs.google.com/document/d/1UGadEUhjZ-wyVywIb1-Qwpd32jPkobNaYisQTuJG-wQ) |
| Just Another Keymaker | [link](https://docs.google.com/document/d/15c2a6DnBQPJbnVhbjH54KIKVr_I-twb7EQgXB37GAlM) |
| Kaphaus | [link](https://docs.google.com/document/d/1QXedbahyT1FndM9QdxZ8HC0RshpbyCvChTuQTY688lE) |
| KBK-KWK | [link](https://docs.google.com/document/d/1656SEjL_uolfVYeUgiAjbelyM_HhxAg77oTCPWiviD8) |
| KeyForge | [link](https://docs.google.com/document/d/1d-CVHj9vA0l-qQjYOFws6Wh9YPLSpCfFCwGDsmDLoJA) |
| KeyKollectiv | [link](https://docs.google.com/document/d/18jTzayNzUDECKOfe-ZXa6oDucNj8_Pp0jEjsdzvvSws) |
| Latrialum | [link](https://docs.google.com/document/d/1crfV15xlpsIIfDxo0PGoEE40ZZfMUkl4JOZO_d1sILY) |
| Level caps | [link](https://docs.google.com/document/d/1_9U5dSSCKeSQcBIhbHPigUs7jiF0AqNI0MYo5KNtpJ8) |
| Navacaps | [link](https://docs.google.com/document/d/1YP-CG6HSuG04dWwG-PUyql0_sBwmae_3q3ukr5N8nJM) |
| Nightcaps | [link](https://docs.google.com/document/d/1GpFn7f6xb2hF0REHKe4ts2wUeHR5CLX8yUMAqSlGW0k) |
| Nubbinator | [link](https://docs.google.com/document/d/1sjsPqvqcjt3Wm3MDomwffYVQYjn_g3SDQX-7G1bNN0U) |
| Polymer Salon | [link](https://docs.google.com/document/d/16FowOOELHP9DmQ7rKdVmgvvEGEgiOhwDtxAA58IDJCg) |
| PrimeCap | [link](https://docs.google.com/document/d/1EwmD8ej34LImbIWi9hw_5Tsk7GAGZBhoVMJwIFG_Ad8) |
| Ritual Master | [link](https://docs.google.com/document/d/1ou0Nk0lPbYXwOHdAOOI9UgbIQHwzd7l3XidY9WK9E7w) |
| Sludgekidd | [link](https://docs.google.com/document/d/1NDxNP0oKZOGW_13FrXevtgagTYmgHTGn66V7MYf7sx0) |
| SodieCaps | [link](https://docs.google.com/document/d/1R2dHjC3M2dab4_pMVnc-ti11gazoD42Lqknjm5EW2R0) |
| TinyMakesThings | [link](https://docs.google.com/document/d/17Zb-LmujFdcnOZ2_VFhoPHKP1gZJmzEKJH2fawFeqpk) |
| Tokkipee | [link](https://docs.google.com/document/d/1kZoXY-9rV25G5cSwgQxAHwmcjVXNL_LUj8vxhmYYk7k) |
| trmk | [link](https://docs.google.com/document/d/19r0FNbI7cLrjogfDviC7WT2HkuRax9RmPZwn3B_DNOY) |
| Wildstory Caps | [link](https://docs.google.com/document/d/1745lR0WbiVE9-loe1n4evgd6cPE07yAysP-nZxF2ji0) |
| Zorbcaps | [link](https://docs.google.com/document/d/1_wtEVliorr29dTkO7NHHBkM3fu80V_rU6eJKMVwd8qQ) |

## TODO

Add those catalogs:

| Catalog | Url |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| SUK | [link](https://suitedupkeycaps.com/) |
