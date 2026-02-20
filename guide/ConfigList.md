# LalaPadGen2で設定可能なコンフィグ一覧
## トラックパッド（IQS9151）

- "lalapadgen2_right.conf"、"lalapadgen2_left.conf"がそれぞれ左右トラックパッドのコンフィグに対応しています。

| Kconfig名 | デフォルト値 | 有効範囲/選択肢 | 概要 |
| --- | --- | --- | --- |
| `CONFIG_INPUT_IQS9151` | `y` | `y/n` | IQS9151ドライバの有効化 |
| `CONFIG_INPUT_IQS9151_ROTATE_*` | `ROTATE_0` | `0 / 90 / 180 / 270` | 座標系回転 |
| `CONFIG_INPUT_IQS9151_RESOLUTION_X` | `2457` | `0..65535` | X解像度 |
| `CONFIG_INPUT_IQS9151_RESOLUTION_Y` | `3072` | `0..65535` | Y解像度 |
| `CONFIG_INPUT_IQS9151_ATI_TARGETCOUNT` | `400` | `0..1000` | ATIターゲット値 |
| `CONFIG_INPUT_IQS9151_DYNAMIC_FILTER_BOTTOM_SPEED` | `30` | `0..65535` | 動的フィルタ下限速度 |
| `CONFIG_INPUT_IQS9151_DYNAMIC_FILTER_TOP_SPEED` | `511` | `0..65535` | 動的フィルタ上限速度 |
| `CONFIG_INPUT_IQS9151_DYNAMIC_FILTER_BOTTOM_BETA` | `20` | `0..255` | 動的フィルタ下限ベータ |
| `CONFIG_INPUT_IQS9151_PRESSHOLD_TIME_MS` | `200` | `0..1000` | プレス&ホールド判定時間(ms) |
| `CONFIG_INPUT_IQS9151_1F_TAP_ENABLE` | `y` | `y/n` | 1本指タップ有効化 |
| `CONFIG_INPUT_IQS9151_1F_PRESSHOLD_ENABLE` | `y` | `y/n` | 1本指プレス&ホールド有効化 |
| `CONFIG_INPUT_IQS9151_CURSOR_INERTIA_ENABLE` | `y` | `y/n` | カーソル慣性の有効化 |
| `CONFIG_INPUT_IQS9151_CURSOR_INERTIA_DECAY` | `950` | `0..1000` | カーソル慣性減衰係数 |
| `CONFIG_INPUT_IQS9151_2F_TAP_ENABLE` | `y` | `y/n` | 2本指タップ有効化 |
| `CONFIG_INPUT_IQS9151_2F_PRESSHOLD_ENABLE` | `y` | `y/n` | 2本指プレス&ホールド有効化 |
| `CONFIG_INPUT_IQS9151_SCROLL_Y_ENABLE` | `y` | `y/n` | 縦スクロール有効化 |
| `CONFIG_INPUT_IQS9151_SCROLL_X_ENABLE` | `y` | `y/n` | 横スクロール有効化 |
| `CONFIG_INPUT_IQS9151_SCROLL_INERTIA_ENABLE` | `y` | `y/n` | スクロール慣性の有効化 |
| `CONFIG_INPUT_IQS9151_SCROLL_INERTIA_DECAY` | `980` | `0..1000` | スクロール慣性減衰係数 |
| `CONFIG_INPUT_IQS9151_2F_PINCH_ENABLE` | `y` | `y/n` | 2本指ピンチ有効化 |
| `CONFIG_INPUT_IQS9151_3F_TAP_ENABLE` | `y` | `y/n` | 3本指タップ有効化 |
| `CONFIG_INPUT_IQS9151_3F_SWIPE_THRESHOLD` | `200` | `0..1000` | 3本指スワイプ判定しきい値 |
