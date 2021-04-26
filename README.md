# Keycap Archivist Database

![Discord](https://img.shields.io/discord/707159843751854141)

Database currently contains:

- Artists : 95
- Sculpts : 1094
- Colorways : 26025

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

| Id | Catalog | Url |
| -- | ------- | --- |
| 70a60bc4 | 404Artisans | [link](https://docs.google.com/document/d/1Xjq3VloGrpGE9gmEcbdGhaX_NB0O5eqv7xg_PgVgHX0) |
| a00953bd | Alpha Keycaps | [link](https://alphakeycaps.com/) |
| 8c954f4 | Amidst The Clouds | [link](https://docs.google.com/document/d/11BeNsND5cMw_NMfGhQfeitg4oFJGNbT4aJ9C_8_iB60) |
| 63243e40 | Archetype | [link](https://docs.google.com/document/d/1A8WdP-pS82xPQuxw98EuOyfmAncqlPLmLtzS2uujfWg) |
| 67588eb5 | Artkey | [link](https://docs.google.com/document/d/1piD-uC3eAwy0dkqxnsZoYr_-AnezmelpFnHfuK3RslM) |
| 9adb7126 | AX Studio | [link](https://docs.google.com/document/d/10pezHskqq5EVPEKb2fkm2e8gFrch-rWtXB3eQy_KbkI) |
| a9328677 | B.o.B Handcraft | [link](https://docs.google.com/document/d/1Igk_at2yvP_Bd6GNd3_GLCQmooNszkNDDvm2b6yqIQM) |
| 634ef7c | Backward Caps | [link](https://docs.google.com/document/d/1eHoHMjOIaZv57h3XgOfamgWaE4nfMbFKLj827XNKSac) |
| b6cb880b | Bad and Booj Keys | [link](https://docs.google.com/document/d/15OgzFWmOJWM5h0JBMV85041Vjd88lNXfj6cWkwd-BFM) |
| 32a182c4 | Bad Habit Caps | [link](https://docs.google.com/document/d/1MUoyBLW1slC819V1IdDa2eAV5adU2IHGa5YjmFY5w88) |
| 85b28a01 | Binirias | [link](https://docs.google.com/document/d/11EAZ-nVLgIKuRXEXQDQ1SJotvq871jPLMo9HlS3eAZg) |
| 4fa3abe3 | BladeMX | [link](https://docs.google.com/document/d/1phPDeQ05dFkGzaXeVZzCjv-E8c58xh6skD0cR_koE1k) |
| ff8ad9cd | Bludgeoned Kaps | [link](https://docs.google.com/document/d/1KKMT4uvPquXcrWF1dX3p3R-PJ_0A98oUO2kwkNvLOd8) |
| 84748ce6 | BoomSnap Caps | [link](https://docs.google.com/document/d/1Uj-JdFhGKaEhKw7-O3HGzzrNctD1c4a8zwC6lezk9nQ) |
| 3c63e8bf | Booper-Omniclectic | [link](https://docs.google.com/document/d/18QS_4zYR3rFtGLLV1fPZCce5vc6i8_3kauY36xUtTdk) |
| dc6c280a | Bowbie | [link](https://docs.google.com/document/d/1CyKhBbny0xMHcbHtdFQC_P0nrczYOpYdz3KV6ujdPnc) |
| 40217679 | BrewCaps | [link](https://docs.google.com/document/d/1ibnukzm73aRIkBm83OhmPsT6wdyA1GH3MRQ6FPBkOSA) |
| 6b8946c4 | Bro Caps | [link](https://docs.google.com/document/d/1SLiSnTXJXR6X5jT5VnmAe4e3K2yFgZosxBUY1kQQKwo) |
| 384b501d | C.Y.O Keycaps | [link](https://docs.google.com/document/d/1Rhig59IdZh5IZ3JP3R_FjZncRxo2M5tfPiUyxJBuLq8) |
| 7893764b | Captomaniacs | [link](https://docs.google.com/document/d/1yy-k0dvNLQtG9syt3gXHEhVLzuDD7nFSmsai7SSpm94) |
| 746e9d1 | Clack Factory | [link](https://docs.google.com/document/d/1C9I7PaXFtpNzI8Zb_6ZTjHLMrQ8ERyWn_IvMD8mVoq0) |
| 155af2e6 | Coconut Keycaps | [link](https://docs.google.com/document/d/1lx648GXchw4ZpctFtirPx_teQcpcgVWuy83W32JY4KU) |
| 84c8facf | CozCaps | [link](https://docs.google.com/document/d/14EBfRe0AxEbCok856_HrL6teQAlkeQL3kpa3z8lenTc) |
| fd91c007 | Craftkey | [link](https://docs.google.com/document/d/1Ruol_1a4kzgLyXkeQ4d7ayu2shpsJPrHVUu7dBIYOYQ) |
| 52730e4a | CYSM | [link](https://docs.google.com/document/d/1c0H4ABr3csHH5B9WP7yyKfCcjLvBE7aJrNwlQzcczcI) |
| 120fb8f2 | Dalifu Caps | [link](https://docs.google.com/document/d/1JpL8NeP-J85x_Viy_VGzM5fRpEAMPw_giRO78eHnc4E) |
| bced6bca | DCcaps | [link](https://docs.google.com/document/d/1ENp3M-HymI9LsJRloDGuo3o9s-FXHzFj6hWazGfXSEQ) |
| df46082a | DeagCaps | [link](https://docs.google.com/document/d/1SsLhATHPRDOSAiywL5ktrGAuZbW9swCOd2cBGuUds3E) |
| 6ff97cfa | Deathcaps | [link](https://docs.google.com/document/d/1Y1Ip37QbnjNNiOYEAvbv9KVz9A74DFEufDDF22F1OvA) |
| 3d066446 | Destroyer Caps | [link](https://docs.google.com/document/d/1Me6mlm7YPdH0v5nkCQBZrGJ555gT2RAXwLzC_g4cdIg) |
| 95f25c5d | Dollartacos | [link](https://docs.google.com/document/d/1iAaGXFW6zqBa8lx6sKyQmKTvtiDA1zEiAM4jR4zd-Bs) |
| 685c2588 | Dreadkeys | [link](https://docs.google.com/document/d/1tzm7_NLV5XdM2tuM2naiZhDjMMygstN2XneBU_GWbeY) |
| 1eb1d13a | DustyCaps | [link](https://docs.google.com/document/d/1EZstC5O7OMdsCMMzs-YbV3Y5pooytHrHpLWaULr3pEI) |
| bac9503f | Fraktal Kaps | [link](https://docs.google.com/document/d/13LmVzCkuN7uGhair0QXq1sJkI7LK6jBs-uhnVU-hDII) |
| 8d20284c | Frumpzkeys | [link](https://docs.google.com/document/d/15arZPVtJHvLxrF20l_Oc-cZCwZrwtMI_SyiD2KDsvWg) |
| 6829387 | Girlycaps Studios | [link](https://docs.google.com/document/d/1cDD3aNsQXHJfyskP8906BUwfc1_4H_JJTtZ9akhQkOc) |
| 321e47e3 | Glyco Caps | [link](https://docs.google.com/document/d/1SOtOKEBn8oUXnECK0_9-sJ5YBh6BijlbKB6CZsNEBbc) |
| f52fa070 | Goldenstar Keycap | [link](https://docs.google.com/document/d/1rCP_Nn_PQeMiqsFlJ2_8TvFHFPsTpq90-QPgDBo7H40) |
| fb0800a2 | gooey keys | [link](https://docs.google.com/document/d/15tTzH6j6qne6WHnADVr_kHI_n2WJUD7Zk26Qdiu_SLA) |
| 84c0fb40 | Gothcaps | [link](https://docs.google.com/document/d/17YdYcvKifysUDk6mt750Jgq7Zke2kSi66kfqc9BE6RQ) |
| 8a2782a7 | Grimey as Fuck | [link](https://docs.google.com/document/d/1AdPXkALzPErnyMQZrWDJ6o-jCvFB34XeZyz00FDDvLY) |
| cc91fabb | GTB | [link](https://docs.google.com/document/d/1qoQ7zBUrkCvfu-xMHcCvxObflfy8z8fWJnkMBJcdp_w) |
| 8ffca07f | Hellbent Caps | [link](https://docs.google.com/document/d/15NNk_ttTXCBCHTzyEE3_EigOHPYnc1M5fVGRZJIt0AA) |
| ada5e593 | Hello Caps | [link](https://docs.google.com/document/d/1r_RNJJW5uagd8SL47-c_b_lvb2TuxBsqU6zJhFzs2Vk) |
| c0c9ffa9 | Hot Keys Project | [link](https://docs.google.com/document/d/1KcZjWQ59gmgNoX1piEdf6MX1r6sBig2_G9AYrs1SjBQ) |
| 4183ab23 | Hunger Work Studio | [link](https://docs.google.com/document/d/1UGadEUhjZ-wyVywIb1-Qwpd32jPkobNaYisQTuJG-wQ) |
| 8ac373e3 | HungryHustlas | [link](https://docs.google.com/document/d/1VpFhfYEekz9x2Oe02FAlw8xYVmisHkmrt2NxCxDHdxw) |
| d6c0d49e | Just Another Keymaker | [link](https://docs.google.com/document/d/15c2a6DnBQPJbnVhbjH54KIKVr_I-twb7EQgXB37GAlM) |
| 6513dfae | KapCave | [link](https://kapcave.nachie.com/api/v1/catalog/list) |
| cdd91103 | Kaphaus | [link](https://docs.google.com/document/d/1QXedbahyT1FndM9QdxZ8HC0RshpbyCvChTuQTY688lE) |
| 8cb07a8b | KBK-KWK | [link](https://docs.google.com/document/d/1656SEjL_uolfVYeUgiAjbelyM_HhxAg77oTCPWiviD8) |
| f2a7d69d | Keycat | [link](https://docs.google.com/document/d/1VNVGf02zR9t3QBYXbxV9SqJFuilQBpKxWHTj0iWrX3w) |
| 7b28db24 | KeyCravings | [link](https://docs.google.com/document/d/1QjFV7yp4Ez8k51qPo2fx_2sXVH9l7SdbI3_sy_E7R_o) |
| 1091a0ac | KeyForge | [link](https://docs.google.com/document/d/1d-CVHj9vA0l-qQjYOFws6Wh9YPLSpCfFCwGDsmDLoJA) |
| 5137e37f | KeyKollectiv | [link](https://docs.google.com/document/d/18jTzayNzUDECKOfe-ZXa6oDucNj8_Pp0jEjsdzvvSws) |
| c14e96a7 | KrakenKap | [link](https://docs.google.com/document/d/1zvIUqPg7D-vge_JzpzqmnD4lEkQgzaQCBFc10FXmasA) |
| ab1d3b22 | Latrialum | [link](https://docs.google.com/document/d/1crfV15xlpsIIfDxo0PGoEE40ZZfMUkl4JOZO_d1sILY) |
| 4e2dec37 | LazyCaps | [link](https://docs.google.com/document/d/1yyLznWKS7QTrOLTTfP9izvDIlEE_q9n0To1Id3N_0FQ) |
| fa0bf049 | Level caps | [link](https://docs.google.com/document/d/1_9U5dSSCKeSQcBIhbHPigUs7jiF0AqNI0MYo5KNtpJ8) |
| ddaf1f8c | Lividity | [link](https://docs.google.com/document/d/18mc8abYoFIYDEqpvJzG5qYLXoQBTBUu9DUp7JSmIFxM) |
| 814e90b | Lo-Ki Caps | [link](https://docs.google.com/document/d/1QGRxPMGI-GIN63LCatprE60zDfcVmy67cG53aXLDf8M) |
| ea0b31fa | Mastonon.kaps | [link](https://docs.google.com/document/d/1XwH1785exI1NCfr3M-ZtkcTxDe4fICVP0Tmbvg00HXQ) |
| f79138dd | MelonKeys | [link](https://docs.google.com/document/d/1ceCQ48nyCfZ2u0jnzgnvVW0nuxd01a0QS48cx_TVh-U) |
| 8b68584c | Navacaps | [link](https://docs.google.com/document/d/1YP-CG6HSuG04dWwG-PUyql0_sBwmae_3q3ukr5N8nJM) |
| 1fac6e72 | Nightcaps | [link](https://docs.google.com/document/d/1GpFn7f6xb2hF0REHKe4ts2wUeHR5CLX8yUMAqSlGW0k) |
| d2df83d9 | Nubbinator | [link](https://docs.google.com/document/d/1sjsPqvqcjt3Wm3MDomwffYVQYjn_g3SDQX-7G1bNN0U) |
| 8874564c | Obscura | [link](https://docs.google.com/document/d/1nhTGlHevXa6adT_nUrr8aSwt0MevlqlRA3K4_AAr7nE) |
| 500aa195 | Phage Caps | [link](https://docs.google.com/document/d/1m7S6LaNaAg7vfZP9Bt23EYX7v3boC3TpTaqF0gBsEaM) |
| b05d0831 | Polymer Salon | [link](https://docs.google.com/document/d/16FowOOELHP9DmQ7rKdVmgvvEGEgiOhwDtxAA58IDJCg) |
| a73f210e | PrimeCaps | [link](https://docs.google.com/document/d/1EwmD8ej34LImbIWi9hw_5Tsk7GAGZBhoVMJwIFG_Ad8) |
| 8dac3435 | ProjectKey | [link](https://docs.google.com/document/d/1UGwGloN5Cf6w_goJB6FX3FcDiB8EsCjHLLB4r17T3OE) |
| c6e4a02a | RADcaps | [link](https://docs.google.com/document/d/1KINOK9cUUA28pSGnHc8ZI-RM36o12ADojXp7ZeNdTh4) |
| e0a4bf52 | Rathcaps | [link](https://docs.google.com/document/d/1mX-wUILSjmOGULIju5SKD3zKn7VE9hLl2BHgZZPTnG0) |
| 2842faca | Resin Party | [link](https://docs.google.com/document/d/172dSOYEqvHX0ihkMkq-iB4fwqKAuKaoSQDDCdLDucVc) |
| 1544e340 | Ritual Master | [link](https://docs.google.com/document/d/1ou0Nk0lPbYXwOHdAOOI9UgbIQHwzd7l3XidY9WK9E7w) |
| 55b03b25 | rtg_caps_ | [link](https://docs.google.com/document/d/1XNeLhAdqfwbgmpm4qbN9nUFQzLktN0JiEJGgRVCEnpk) |
| d1df0782 | Rubrehose | [link](https://docs.google.com/document/d/1dCtWhW9ng-IgVFi-98HyglVmfVLIqiFN6w8u5-0EU4E) |
| 958ea08d | S-Craft Studio | [link](https://docs.google.com/document/d/1zM8PAeSNFJ1Voo4m2Qpcjqtymy_umMBBMVt_USkoYCs) |
| e035ee16 | shirouu.kaps | [link](https://docs.google.com/document/d/177W_IQZ1HRQbSZ4pjLuWqGlhvS9sTpVZcKV_Ucs-h9M) |
| 61895633 | Simulacra Caps | [link](https://docs.google.com/document/d/1tY7twR6E65afan23BediwbxwvsjJqXtleE949r5mNeg) |
| a31490c1 | Slime Scholar | [link](https://docs.google.com/document/d/14jF0ewtoj5S2GPXkGrfppH3zu0Dd2Y8aZnJ_nP1kPuw) |
| 34fb9c1f | Sludgekidd | [link](https://docs.google.com/document/d/1NDxNP0oKZOGW_13FrXevtgagTYmgHTGn66V7MYf7sx0) |
| 834a1ae7 | SodieCaps | [link](https://docs.google.com/document/d/1R2dHjC3M2dab4_pMVnc-ti11gazoD42Lqknjm5EW2R0) |
| 366c9651 | Suited Up Keycaps | [link](https://docs.google.com/document/d/17XHW8yaMXVS5i82lOrjXIF7Q68NwCg6w9B6BiEn7A1k) |
| ede9ca7c | Sway Caps | [link](https://docs.google.com/document/d/1tRhoMKBVZuBxE9UAynqtBNrm__OEjQnOF07NIUamQtE) |
| 4e4eda29 | Tech. Stoned. Amish. | [link](https://docs.google.com/document/d/1CzwP-Zj8cLVvMdQRJqDFL_kiZOaOHAcgp3F0owh4-nY) |
| dd852aca | TinyMakesThings | [link](https://docs.google.com/document/d/17Zb-LmujFdcnOZ2_VFhoPHKP1gZJmzEKJH2fawFeqpk) |
| 72ec7d70 | Tokkipee | [link](https://docs.google.com/document/d/1kZoXY-9rV25G5cSwgQxAHwmcjVXNL_LUj8vxhmYYk7k) |
| 985ff9d3 | trmk | [link](https://docs.google.com/document/d/19r0FNbI7cLrjogfDviC7WT2HkuRax9RmPZwn3B_DNOY) |
| a8ab97a4 | Unbranded.caps | [link](https://docs.google.com/document/d/1nQIdjUjkWGyGAIgiEl2oXANX2MJj91uFhCPKOLx2qWw) |
| de28aff1 | Wildstory Caps | [link](https://docs.google.com/document/d/1745lR0WbiVE9-loe1n4evgd6cPE07yAysP-nZxF2ji0) |
| e2285960 | Win Keys | [link](https://docs.google.com/document/d/1RKX9sVYGkGQKnfGjaLeiFuYwA5zbi5UYfdwSYxHK90w) |
| 15c2097d | YoungsterHarris | [link](https://docs.google.com/document/d/1OB-qI-3izrbmWZG08Qi-ihNaCRRB_qmvivs0KCEWpAk) |
| ff972406 | Zorbcaps | [link](https://docs.google.com/document/d/1_wtEVliorr29dTkO7NHHBkM3fu80V_rU6eJKMVwd8qQ) |
| ce8a8e22 | Zy.cap | [link](https://docs.google.com/document/d/1iFu8FhwjqIJSrweEA9ziazm0eD5rz3k3NgMtzIHzNw0) |
