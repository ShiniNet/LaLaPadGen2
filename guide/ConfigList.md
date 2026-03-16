# LalaPadGen2で設定可能なコンフィグ一覧
## トラックパッド（IQS9151）

- 左右トラックパッド設定は以下にあります。
  - `zmk-config-LalaPadGen2/config/lalapadgen2.conf`
  - `zmk-config-LalaPadGen2/config/boards/shields/lalapadgen2/lalapadgen2_left.conf`
  - `zmk-config-LalaPadGen2/config/boards/shields/lalapadgen2/lalapadgen2_right.conf`
- 設定反映ルールは以下です。
  - `lalapadgen2.conf` の設定は左右両方へ反映されます。
  - `lalapadgen2_left.conf` は左側のみに反映されます。
  - `lalapadgen2_right.conf` は右側のみに反映されます。
- 本ページは `ShiniNet/zmk-driver-iqs9151/documents/iqs9151_kconfig_reference.md` を基準に、現在の Kconfig 既定値を反映しています。
- `入力値` 列は、bool は `y / n`、数値は `min..max` の形式で記載しています。
- `整数` は Kconfig に明示的な range 制約がない項目です。`Rotation` は choice のため、4項目のうち 1 つだけを `y` にします。


### 1. Driver Core

| Kconfig名 | Kconfig既定値 | 入力値 | 概要 |
| --- | --- | --- | --- |
| `CONFIG_INPUT_IQS9151` | `y` | `y / n` | IQS9151ドライバ有効化 |
| `CONFIG_INPUT_IQS9151_LOG_LEVEL` | `INPUT_LOG_LEVEL`（LOG有効時）/ `0` | `0..4` | ドライバログレベル |
| `CONFIG_INPUT_IQS9151_INIT_PRIORITY` | `80` | `整数` | ドライバ初期化優先度 |

### 2. Rotation

| Kconfig名 | Kconfig既定値 | 入力値 | 概要 |
| --- | --- | --- | --- |
| `CONFIG_INPUT_IQS9151_ROTATE_0` | `y` | `y / n` | 回転なし |
| `CONFIG_INPUT_IQS9151_ROTATE_90` | `n` | `y / n` | 90度回転 |
| `CONFIG_INPUT_IQS9151_ROTATE_180` | `n` | `y / n` | 180度回転 |
| `CONFIG_INPUT_IQS9151_ROTATE_270` | `n` | `y / n` | 270度回転 |

### 3. IC Parameter Overrides

| Kconfig名 | Kconfig既定値 | 入力値 | 概要 |
| --- | --- | --- | --- |
| `CONFIG_INPUT_IQS9151_RESOLUTION_X` | `2457` | `0..4095` | X解像度設定 |
| `CONFIG_INPUT_IQS9151_RESOLUTION_Y` | `3072` | `0..4095` | Y解像度設定 |
| `CONFIG_INPUT_IQS9151_ATI_TARGETCOUNT` | `400` | `0..1000` | Trackpad ATIターゲット |
| `CONFIG_INPUT_IQS9151_DYNAMIC_FILTER_BOTTOM_SPEED` | `30` | `0..2047` | Dynamic Filter Bottom Speed |
| `CONFIG_INPUT_IQS9151_DYNAMIC_FILTER_TOP_SPEED` | `511` | `0..2047` | Dynamic Filter Top Speed |
| `CONFIG_INPUT_IQS9151_DYNAMIC_FILTER_BOTTOM_BETA` | `20` | `0..255` | Dynamic Filter Bottom Beta |

### 4. Gesture Detection and Thresholds

| Kconfig名 | Kconfig既定値 | 入力値 | 概要 |
| --- | --- | --- | --- |
| `CONFIG_INPUT_IQS9151_1F_TAP_ENABLE` | `y` | `y / n` | 1F Tap 有効/無効 |
| `CONFIG_INPUT_IQS9151_1F_TAP_MAX_MS` | `250` | `1..1000` | 1F Tap/2回目Tap 判定の最大時間 |
| `CONFIG_INPUT_IQS9151_1F_TAP_MOVE` | `50` | `1..1000` | 1F Tap 移動しきい値 |
| `CONFIG_INPUT_IQS9151_1F_PRESSHOLD_ENABLE` | `y` | `y / n` | 1F TapDrag 有効/無効 |
| `CONFIG_INPUT_IQS9151_1F_TAPDRAG_GAP_MAX_MS` | `160` | `1..1000` | 1F Tap後にBTN0を保持して2回目タッチを待つ最大時間 |
| `CONFIG_INPUT_IQS9151_2F_TAP_ENABLE` | `y` | `y / n` | 2F Tap 有効/無効 |
| `CONFIG_INPUT_IQS9151_2F_TAP_MAX_MS` | `250` | `1..1000` | 2F Tap 最大時間 |
| `CONFIG_INPUT_IQS9151_2F_TAP_MOVE` | `50` | `1..1000` | 2F Tap 移動しきい値（重心/距離） |
| `CONFIG_INPUT_IQS9151_2F_PRESSHOLD_ENABLE` | `y` | `y / n` | 2F TapDrag 有効/無効 |
| `CONFIG_INPUT_IQS9151_2F_TAPDRAG_GAP_MAX_MS` | `200` | `1..1000` | 2F Tap後にBTN1を保持して2回目2Fタッチを待つ最大時間 |
| `CONFIG_INPUT_IQS9151_SCROLL_X_ENABLE` | `y` | `y / n` | 2F 横スクロール有効/無効 |
| `CONFIG_INPUT_IQS9151_SCROLL_Y_ENABLE` | `y` | `y / n` | 2F 縦スクロール有効/無効 |
| `CONFIG_INPUT_IQS9151_2F_SCROLL_START_MOVE` | `50` | `1..2000` | 2F Scroll 開始しきい値 |
| `CONFIG_INPUT_IQS9151_2F_PINCH_ENABLE` | `y` | `y / n` | 2F Pinch 有効/無効 |
| `CONFIG_INPUT_IQS9151_2F_PINCH_START_DISTANCE` | `100` | `1..2000` | 2F Pinch 開始しきい値 |
| `CONFIG_INPUT_IQS9151_2F_PINCH_WHEEL_GAIN_X10` | `40` | `1..100` | 2F Pinch `REL_WHEEL` ゲイン（x10） |
| `CONFIG_INPUT_IQS9151_3F_TAP_ENABLE` | `y` | `y / n` | 3F Tap 有効/無効 |
| `CONFIG_INPUT_IQS9151_3F_TAP_MAX_MS` | `200` | `1..1000` | 3F Tap 最大時間 |
| `CONFIG_INPUT_IQS9151_3F_TAP_MOVE` | `35` | `1..1000` | 3F Tap 移動しきい値 |
| `CONFIG_INPUT_IQS9151_3F_PRESSHOLD_ENABLE` | `y` | `y / n` | 3F TapDrag 有効/無効 |
| `CONFIG_INPUT_IQS9151_3F_TAPDRAG_GAP_MAX_MS` | `200` | `1..1000` | 3F Tap後にBTN2を保持して2回目3Fタッチを待つ最大時間 |
| `CONFIG_INPUT_IQS9151_3F_SWIPE_THRESHOLD` | `200` | `0..1000` | 3F Swipe しきい値 |

### 5. Inertia

| Kconfig名 | Kconfig既定値 | 入力値 | 概要 |
| --- | --- | --- | --- |
| `CONFIG_INPUT_IQS9151_CURSOR_INERTIA_ENABLE` | `y` | `y / n` | 1Fカーソル慣性 有効/無効 |
| `CONFIG_INPUT_IQS9151_CURSOR_INERTIA_DECAY` | `950` | `0..1000` | 1Fカーソル慣性 減衰率 |
| `CONFIG_INPUT_IQS9151_CURSOR_INERTIA_RECENT_WINDOW_MS` | `60` | `1..500` | 1Fカーソル慣性の recent-window 判定時間 |
| `CONFIG_INPUT_IQS9151_CURSOR_INERTIA_STALE_GAP_MS` | `35` | `1..500` | 最終1F移動から release までの最大許容時間 |
| `CONFIG_INPUT_IQS9151_CURSOR_INERTIA_MIN_SAMPLES` | `2` | `1..12` | 1Fカーソル慣性に必要な直近移動サンプル数 |
| `CONFIG_INPUT_IQS9151_CURSOR_INERTIA_MIN_AVG_SPEED` | `10` | `1..500` | 1Fカーソル慣性に必要な平均速度 |
| `CONFIG_INPUT_IQS9151_SCROLL_INERTIA_ENABLE` | `y` | `y / n` | 2Fスクロール慣性 有効/無効 |
| `CONFIG_INPUT_IQS9151_SCROLL_INERTIA_DECAY` | `980` | `0..1000` | 2Fスクロール慣性 減衰率 |
| `CONFIG_INPUT_IQS9151_SCROLL_INERTIA_RECENT_WINDOW_MS` | `60` | `1..500` | 2Fスクロール慣性の recent-window 判定時間 |
| `CONFIG_INPUT_IQS9151_SCROLL_INERTIA_STALE_GAP_MS` | `35` | `1..500` | 最終2Fスクロールから release までの最大許容時間 |
| `CONFIG_INPUT_IQS9151_SCROLL_INERTIA_MIN_SAMPLES` | `1` | `1..12` | 2Fスクロール慣性に必要な直近スクロールサンプル数 |
| `CONFIG_INPUT_IQS9151_SCROLL_INERTIA_MIN_AVG_SPEED` | `4` | `1..500` | 2Fスクロール慣性に必要な平均速度 |

### 6. Test

| Kconfig名 | Kconfig既定値 | 入力値 | 概要 |
| --- | --- | --- | --- |
| `CONFIG_INPUT_IQS9151_TEST` | `n` | `y / n` | ZTEST用の内部テストフック有効化（`depends on ZTEST`） |
