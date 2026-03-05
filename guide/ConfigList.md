# LalaPadGen2で設定可能なコンフィグ一覧
## トラックパッド（IQS9151）

- 左右トラックパッド設定は以下にあります。
  - `ShiniNet/zmk-config-LalaPadGen2/config/lalapadgen2.conf`（左右共通）
  - `ShiniNet/zmk-config-LalaPadGen2/config/boards/shields/lalapadgen2/lalapadgen2_left.conf`
  - `ShiniNet/zmk-config-LalaPadGen2/config/boards/shields/lalapadgen2/lalapadgen2_right.conf`
- 設定反映ルールは以下です。
  - `lalapadgen2.conf` の設定は左右両方へ反映されます。
  - `lalapadgen2_left.conf` は左側のみに反映されます。
  - `lalapadgen2_right.conf` は右側のみに反映されます。
- 本ページは `ShiniNet/zmk-driver-iqs9151/documents/iqs9151_kconfig_reference.md` を基準に、`lalapadgen2.conf` と左右 `.conf` の現状値を反映しています。
- `未設定` は `.conf` に明示されておらず、Kconfig既定値が適用されます。

### 1. Driver Core

| Kconfig名 | 現在値（左右共通） | Kconfig既定値 | 概要 |
| --- | --- | --- | --- |
| `CONFIG_INPUT_IQS9151` | `y` | `y` | IQS9151ドライバ有効化 |
| `CONFIG_INPUT_IQS9151_LOG_LEVEL` | `未設定（既定値適用）` | `INPUT_LOG_LEVEL`（LOG有効時）/ `0` | ドライバログレベル |
| `CONFIG_INPUT_IQS9151_INIT_PRIORITY` | `未設定（既定値適用）` | `80` | ドライバ初期化優先度 |

### 2. Rotation

| Kconfig名 | 現在値（左右共通） | Kconfig既定値 | 概要 |
| --- | --- | --- | --- |
| `CONFIG_INPUT_IQS9151_ROTATE_0` | `y` | `y` | 回転なし |
| `CONFIG_INPUT_IQS9151_ROTATE_90` | `n` | `n` | 90度回転 |
| `CONFIG_INPUT_IQS9151_ROTATE_180` | `n` | `n` | 180度回転 |
| `CONFIG_INPUT_IQS9151_ROTATE_270` | `n` | `n` | 270度回転 |

### 3. IC Parameter Overrides

| Kconfig名 | 現在値（左右共通） | Kconfig既定値 | 概要 |
| --- | --- | --- | --- |
| `CONFIG_INPUT_IQS9151_RESOLUTION_X` | `2457` | `2457` | X解像度設定 |
| `CONFIG_INPUT_IQS9151_RESOLUTION_Y` | `3072` | `3072` | Y解像度設定 |
| `CONFIG_INPUT_IQS9151_ATI_TARGETCOUNT` | `400` | `400` | Trackpad ATIターゲット |
| `CONFIG_INPUT_IQS9151_DYNAMIC_FILTER_BOTTOM_SPEED` | `30` | `20` | Dynamic Filter Bottom Speed |
| `CONFIG_INPUT_IQS9151_DYNAMIC_FILTER_TOP_SPEED` | `511` | `511` | Dynamic Filter Top Speed |
| `CONFIG_INPUT_IQS9151_DYNAMIC_FILTER_BOTTOM_BETA` | `20` | `10` | Dynamic Filter Bottom Beta |

### 4. Gesture Detection and Thresholds

| Kconfig名 | 現在値（左右共通） | Kconfig既定値 | 概要 |
| --- | --- | --- | --- |
| `CONFIG_INPUT_IQS9151_1F_TAP_ENABLE` | `y` | `y` | 1F Tap 有効/無効 |
| `CONFIG_INPUT_IQS9151_1F_TAP_MAX_MS` | `250` | `120` | 1F Tap/2回目Tap 判定の最大時間 |
| `CONFIG_INPUT_IQS9151_1F_TAP_MOVE` | `50` | `25` | 1F Tap 移動しきい値 |
| `CONFIG_INPUT_IQS9151_1F_PRESSHOLD_ENABLE` | `y` | `y` | 1F deferred-click/drag 有効/無効 |
| `CONFIG_INPUT_IQS9151_1F_TAPDRAG_GAP_MAX_MS` | `160` | `230` | 1F Tap後にBTN0を保持して2回目タッチを待つ最大時間 |
| `CONFIG_INPUT_IQS9151_2F_TAP_ENABLE` | `y` | `y` | 2F Tap 有効/無効 |
| `CONFIG_INPUT_IQS9151_2F_TAP_MAX_MS` | `250` | `130` | 2F Tap 最大時間 |
| `CONFIG_INPUT_IQS9151_2F_TAP_MOVE` | `50` | `30` | 2F Tap 移動しきい値（重心/距離） |
| `CONFIG_INPUT_IQS9151_2F_PRESSHOLD_ENABLE` | `y` | `y` | 2F deferred-click/drag 有効/無効 |
| `CONFIG_INPUT_IQS9151_2F_TAPDRAG_GAP_MAX_MS` | `200` | `200` | 2F Tap後にBTN1を保持して2回目2Fタッチを待つ最大時間 |
| `CONFIG_INPUT_IQS9151_SCROLL_X_ENABLE` | `y` | `y` | 2F 横スクロール有効/無効 |
| `CONFIG_INPUT_IQS9151_SCROLL_Y_ENABLE` | `y` | `y` | 2F 縦スクロール有効/無効 |
| `CONFIG_INPUT_IQS9151_2F_SCROLL_START_MOVE` | `50` | `50` | 2F Scroll 開始しきい値 |
| `CONFIG_INPUT_IQS9151_2F_PINCH_ENABLE` | `y` | `y` | 2F Pinch 有効/無効 |
| `CONFIG_INPUT_IQS9151_2F_PINCH_START_DISTANCE` | `100` | `80` | 2F Pinch 開始しきい値 |
| `CONFIG_INPUT_IQS9151_2F_PINCH_WHEEL_GAIN_X10` | `40` | `40` | 2F Pinch `REL_WHEEL` ゲイン（x10） |
| `CONFIG_INPUT_IQS9151_3F_TAP_ENABLE` | `y` | `y` | 3F Tap 有効/無効 |
| `CONFIG_INPUT_IQS9151_3F_TAP_MAX_MS` | `200` | `180` | 3F Tap 最大時間 |
| `CONFIG_INPUT_IQS9151_3F_TAP_MOVE` | `35` | `30` | 3F Tap 移動しきい値 |
| `CONFIG_INPUT_IQS9151_3F_PRESSHOLD_ENABLE` | `y` | `y` | 3F deferred-click/drag 有効/無効 |
| `CONFIG_INPUT_IQS9151_3F_TAPDRAG_GAP_MAX_MS` | `200` | `230` | 3F Tap後にBTN2を保持して2回目3Fタッチを待つ最大時間 |
| `CONFIG_INPUT_IQS9151_3F_SWIPE_THRESHOLD` | `200` | `300` | 3F Swipe しきい値 |

### 5. Inertia

| Kconfig名 | 現在値（左右共通） | Kconfig既定値 | 概要 |
| --- | --- | --- | --- |
| `CONFIG_INPUT_IQS9151_CURSOR_INERTIA_ENABLE` | `y` | `y` | 1Fカーソル慣性 有効/無効 |
| `CONFIG_INPUT_IQS9151_CURSOR_INERTIA_DECAY` | `950` | `970` | 1Fカーソル慣性 減衰率 |
| `CONFIG_INPUT_IQS9151_SCROLL_INERTIA_ENABLE` | `y` | `y` | 2Fスクロール慣性 有効/無効 |
| `CONFIG_INPUT_IQS9151_SCROLL_INERTIA_DECAY` | `980` | `985` | 2Fスクロール慣性 減衰率 |

### 6. Test

| Kconfig名 | 現在値（左右共通） | Kconfig既定値 | 概要 |
| --- | --- | --- | --- |
| `CONFIG_INPUT_IQS9151_TEST` | `未設定（既定値適用）` | `n` | ZTEST用の内部テストフック有効化（`depends on ZTEST`） |
