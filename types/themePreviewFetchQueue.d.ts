export default class ThemePreviewFetchQueue {
    private engine;
    private init?;
    private loadThemePreviewsTimeout?;
    private themePreviewFetchQueue;
    constructor(engineRef: any);
    private static clamp;
    queue(themesToEnqueue: any): void;
    private loadThemePreviews;
}
