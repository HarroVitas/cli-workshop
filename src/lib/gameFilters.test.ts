import { describe, it, expect } from 'vitest';
import { matchesFilters } from './gameFilters';

describe('matchesFilters', () => {
    const game = { categoryId: 1, publisherId: 10 };

    it('matches everything when no filters are set', () => {
        expect(matchesFilters(game, {})).toBe(true);
        expect(matchesFilters({ categoryId: null, publisherId: null }, {})).toBe(true);
    });

    it('matches any selected category', () => {
        expect(matchesFilters(game, { categoryIds: [2, 1] })).toBe(true);
        expect(matchesFilters(game, { categoryIds: [2] })).toBe(false);
        expect(matchesFilters({ categoryId: null, publisherId: 10 }, { categoryIds: [1] })).toBe(false);
    });

    it('requires both category and publisher when combined', () => {
        expect(matchesFilters(game, { categoryIds: [1], publisherId: 10 })).toBe(true);
        expect(matchesFilters(game, { categoryIds: [1], publisherId: 11 })).toBe(false);
    });
});
