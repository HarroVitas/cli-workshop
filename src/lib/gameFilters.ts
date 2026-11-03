import type { GameFilters } from '../types/game';

/**
 * Whether a game satisfies the given filters. Pure so it can be shared with
 * the client-side filter script and unit tested without a DOM or database.
 *
 * @param game - The game's category and publisher ids (null when unset).
 * @param filters - Selected categories (any-of) and publisher; empty/null means no restriction.
 * @returns `true` when the game matches every active filter.
 */
export function matchesFilters(
    game: { categoryId: number | null; publisherId: number | null },
    filters: GameFilters,
): boolean {
    const { categoryIds = [], publisherId = null } = filters;
    const categoryOk =
        categoryIds.length === 0 || (game.categoryId !== null && categoryIds.includes(game.categoryId));
    const publisherOk = publisherId === null || game.publisherId === publisherId;
    return categoryOk && publisherOk;
}
