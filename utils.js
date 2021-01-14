export function didUserWin(userThrow, computerThrow) {
    if (userThrow === computerThrow) {
        return 'draw';
    }
    const outcome = userThrow + computerThrow;
    if (outcome === 3) {
        return (userThrow === 2) ? 'win' : 'loss';
    } else if (outcome === 2) {
        return (userThrow === 0) ? 'win' : 'loss';
    }
    return (userThrow === 1) ? 'win' : 'loss';
}