# Keycap Archivist Database

![Discord](https://img.shields.io/discord/707159843751854141)

Database currently contains:

- Artists : 64
- Sculpts : 762
- Colorways : 20189

CSV/JSON database of artisan keycaps based on : [https://keycap.info/](https://keycap.info/)

Synchronization is done on a daily basis using a cron github action. If there is a change, the database update itself.

## Develop

To use you need to declare a Google API Key for Drive and export it as an env variable `G_API_KEY`

## Usage

To use the master version of the catalog you can CURL those urls:

- [csv](https://raw.githubusercontent.com/keycap-archivist/database/master/db/catalog.csv)
- [json](https://raw.githubusercontent.com/keycap-archivist/database/master/db/catalog.json)

To manipulate some attributes of the catalogs you can add those to the gdoc:

- `(ka_cover)` will make the sculpt of the current cell as the cover of the catalog
- `(ka_self_order)` anywhere in the document, will use the order of the gdoc instead of alphabetical order
- `(XXXX YEAR)` will add the date on the sculpt or the colorway. Free input field. eg: `(March 2019)` or `(2019)`

## Source Catalogs

| Catalog | Url |
| ------- | --- |
| 404Artisans | [link](https://docs.google.com/document/d/1Xjq3VloGrpGE9gmEcbdGhaX_NB0O5eqv7xg_PgVgHX0) |
| Alpha Keycaps | [link](https://alphakeycaps.com/) |
| Amidst The Clouds | [link](https://docs.google.com/document/d/11BeNsND5cMw_NMfGhQfeitg4oFJGNbT4aJ9C_8_iB60) |
| Archetype | [link](https://docs.google.com/document/d/1A8WdP-pS82xPQuxw98EuOyfmAncqlPLmLtzS2uujfWg) |
| Artkey | [link](https://docs.google.com/document/d/1piD-uC3eAwy0dkqxnsZoYr_-AnezmelpFnHfuK3RslM) |
| Backward Caps | [link](https://docs.google.com/document/d/1eHoHMjOIaZv57h3XgOfamgWaE4nfMbFKLj827XNKSac) |
| Bad and Booj Keys | [link](https://docs.google.com/document/d/15OgzFWmOJWM5h0JBMV85041Vjd88lNXfj6cWkwd-BFM) |
| Bad Habit Caps | [link](https://docs.google.com/document/d/1MUoyBLW1slC819V1IdDa2eAV5adU2IHGa5YjmFY5w88) |
| Binirias | [link](https://docs.google.com/document/d/11EAZ-nVLgIKuRXEXQDQ1SJotvq871jPLMo9HlS3eAZg) |
| BladeMX | [link](https://docs.google.com/document/d/1phPDeQ05dFkGzaXeVZzCjv-E8c58xh6skD0cR_koE1k) |
| Bludgeoned Kaps | [link](https://docs.google.com/document/d/1KKMT4uvPquXcrWF1dX3p3R-PJ_0A98oUO2kwkNvLOd8) |
| BoomSnap Caps | [link](https://docs.google.com/document/d/1Uj-JdFhGKaEhKw7-O3HGzzrNctD1c4a8zwC6lezk9nQ) |
| Booper-Omniclectic | [link](https://docs.google.com/document/d/18QS_4zYR3rFtGLLV1fPZCce5vc6i8_3kauY36xUtTdk) |
| BrewCaps | [link](https://docs.google.com/document/d/1ibnukzm73aRIkBm83OhmPsT6wdyA1GH3MRQ6FPBkOSA) |
| Bro Caps | [link](https://docs.google.com/document/d/1SLiSnTXJXR6X5jT5VnmAe4e3K2yFgZosxBUY1kQQKwo) |
| C.Y.O Keycaps | [link](https://docs.google.com/document/d/1Rhig59IdZh5IZ3JP3R_FjZncRxo2M5tfPiUyxJBuLq8) |
| Clack Factory | [link](https://docs.google.com/document/d/1C9I7PaXFtpNzI8Zb_6ZTjHLMrQ8ERyWn_IvMD8mVoq0) |
| CozCaps | [link](https://docs.google.com/document/d/14EBfRe0AxEbCok856_HrL6teQAlkeQL3kpa3z8lenTc) |
| CYSM | [link](https://docs.google.com/document/d/1c0H4ABr3csHH5B9WP7yyKfCcjLvBE7aJrNwlQzcczcI) |
| DCcaps | [link](https://docs.google.com/document/d/1ENp3M-HymI9LsJRloDGuo3o9s-FXHzFj6hWazGfXSEQ) |
| DeagCaps | [link](https://docs.google.com/document/d/1SsLhATHPRDOSAiywL5ktrGAuZbW9swCOd2cBGuUds3E) |
| Deathcaps | [link](https://docs.google.com/document/d/1Y1Ip37QbnjNNiOYEAvbv9KVz9A74DFEufDDF22F1OvA) |
| Dollartacos | [link](https://docs.google.com/document/d/1iAaGXFW6zqBa8lx6sKyQmKTvtiDA1zEiAM4jR4zd-Bs) |
| DustyCaps | [link](https://docs.google.com/document/d/1EZstC5O7OMdsCMMzs-YbV3Y5pooytHrHpLWaULr3pEI) |
| Fraktal Kaps | [link](https://docs.google.com/document/d/13LmVzCkuN7uGhair0QXq1sJkI7LK6jBs-uhnVU-hDII) |
| Frumpzkeys | [link](https://docs.google.com/document/d/15arZPVtJHvLxrF20l_Oc-cZCwZrwtMI_SyiD2KDsvWg) |
| Glyco Caps | [link](https://docs.google.com/document/d/1SOtOKEBn8oUXnECK0_9-sJ5YBh6BijlbKB6CZsNEBbc) |
| Goldenstar Keycap | [link](https://docs.google.com/document/d/1rCP_Nn_PQeMiqsFlJ2_8TvFHFPsTpq90-QPgDBo7H40) |
| gooey keys | [link](https://docs.google.com/document/d/15tTzH6j6qne6WHnADVr_kHI_n2WJUD7Zk26Qdiu_SLA) |
| Gothcaps | [link](https://docs.google.com/document/d/17YdYcvKifysUDk6mt750Jgq7Zke2kSi66kfqc9BE6RQ) |
| Grimey as Fuck | [link](https://docs.google.com/document/d/1AdPXkALzPErnyMQZrWDJ6o-jCvFB34XeZyz00FDDvLY) |
| GTB | [link](https://docs.google.com/document/d/1qoQ7zBUrkCvfu-xMHcCvxObflfy8z8fWJnkMBJcdp_w) |
| Hello Caps | [link](https://docs.google.com/document/d/1r_RNJJW5uagd8SL47-c_b_lvb2TuxBsqU6zJhFzs2Vk) |
| Hunger Work Studio | [link](https://docs.google.com/document/d/1UGadEUhjZ-wyVywIb1-Qwpd32jPkobNaYisQTuJG-wQ) |
| Just Another Keymaker | [link](https://docs.google.com/document/d/15c2a6DnBQPJbnVhbjH54KIKVr_I-twb7EQgXB37GAlM) |
| Kaphaus | [link](https://docs.google.com/document/d/1QXedbahyT1FndM9QdxZ8HC0RshpbyCvChTuQTY688lE) |
| KBK-KWK | [link](https://docs.google.com/document/d/1656SEjL_uolfVYeUgiAjbelyM_HhxAg77oTCPWiviD8) |
| KeyCravings | [link](https://docs.google.com/document/d/1QjFV7yp4Ez8k51qPo2fx_2sXVH9l7SdbI3_sy_E7R_o) |
| KeyForge | [link](https://docs.google.com/document/d/1d-CVHj9vA0l-qQjYOFws6Wh9YPLSpCfFCwGDsmDLoJA) |
| KeyKollectiv | [link](https://docs.google.com/document/d/18jTzayNzUDECKOfe-ZXa6oDucNj8_Pp0jEjsdzvvSws) |
| Latrialum | [link](https://docs.google.com/document/d/1crfV15xlpsIIfDxo0PGoEE40ZZfMUkl4JOZO_d1sILY) |
| LazyCaps | [link](https://docs.google.com/document/d/1yyLznWKS7QTrOLTTfP9izvDIlEE_q9n0To1Id3N_0FQ) |
| Level caps | [link](https://docs.google.com/document/d/1_9U5dSSCKeSQcBIhbHPigUs7jiF0AqNI0MYo5KNtpJ8) |
| Lividity | [link](https://docs.google.com/document/d/18mc8abYoFIYDEqpvJzG5qYLXoQBTBUu9DUp7JSmIFxM) |
| MelonKeys | [link](https://docs.google.com/document/d/1ceCQ48nyCfZ2u0jnzgnvVW0nuxd01a0QS48cx_TVh-U) |
| Navacaps | [link](https://docs.google.com/document/d/1YP-CG6HSuG04dWwG-PUyql0_sBwmae_3q3ukr5N8nJM) |
| Nightcaps | [link](https://docs.google.com/document/d/1GpFn7f6xb2hF0REHKe4ts2wUeHR5CLX8yUMAqSlGW0k) |
| Nubbinator | [link](https://docs.google.com/document/d/1sjsPqvqcjt3Wm3MDomwffYVQYjn_g3SDQX-7G1bNN0U) |
| Polymer Salon | [link](https://docs.google.com/document/d/16FowOOELHP9DmQ7rKdVmgvvEGEgiOhwDtxAA58IDJCg) |
| PrimeCaps | [link](https://docs.google.com/document/d/1EwmD8ej34LImbIWi9hw_5Tsk7GAGZBhoVMJwIFG_Ad8) |
| ProjectKey | [link](https://docs.google.com/document/d/1UGwGloN5Cf6w_goJB6FX3FcDiB8EsCjHLLB4r17T3OE) |
| Rathcaps | [link](https://docs.google.com/document/d/17xkdiEkCjV-4bRoLg5FgXGxlPDX1NPLCZjWIasnFaeY) |
| Ritual Master | [link](https://docs.google.com/document/d/1ou0Nk0lPbYXwOHdAOOI9UgbIQHwzd7l3XidY9WK9E7w) |
| Simulacra Caps | [link](https://docs.google.com/document/d/1tY7twR6E65afan23BediwbxwvsjJqXtleE949r5mNeg) |
| Sludgekidd | [link](https://docs.google.com/document/d/1NDxNP0oKZOGW_13FrXevtgagTYmgHTGn66V7MYf7sx0) |
| SodieCaps | [link](https://docs.google.com/document/d/1R2dHjC3M2dab4_pMVnc-ti11gazoD42Lqknjm5EW2R0) |
| Suited Up Keycaps | [link](https://docs.google.com/document/d/17XHW8yaMXVS5i82lOrjXIF7Q68NwCg6w9B6BiEn7A1k) |
| TinyMakesThings | [link](https://docs.google.com/document/d/17Zb-LmujFdcnOZ2_VFhoPHKP1gZJmzEKJH2fawFeqpk) |
| Tokkipee | [link](https://docs.google.com/document/d/1kZoXY-9rV25G5cSwgQxAHwmcjVXNL_LUj8vxhmYYk7k) |
| trmk | [link](https://docs.google.com/document/d/19r0FNbI7cLrjogfDviC7WT2HkuRax9RmPZwn3B_DNOY) |
| Unbranded.caps | [link](https://docs.google.com/document/d/1nQIdjUjkWGyGAIgiEl2oXANX2MJj91uFhCPKOLx2qWw) |
| Wildstory Caps | [link](https://docs.google.com/document/d/1745lR0WbiVE9-loe1n4evgd6cPE07yAysP-nZxF2ji0) |
| YoungsterHarris | [link](https://docs.google.com/document/d/1OB-qI-3izrbmWZG08Qi-ihNaCRRB_qmvivs0KCEWpAk) |
| Zorbcaps | [link](https://docs.google.com/document/d/1_wtEVliorr29dTkO7NHHBkM3fu80V_rU6eJKMVwd8qQ) |
