export function didUserWin(userThrow, computerThrow) {
    if (userThrow === computerThrow) {
        return `Back to the drawing board...`;
    }
    const outcome = userThrow + computerThrow;
    if (outcome === 3) {
        return (userThrow === 2) ? `You're a machine... but the good kind!` : `The machines have won.`;
    } else if (outcome === 2) {
        return (userThrow === 0) ? `You're a machine... but the good kind!` : `The machines have won.`;
    }
    return (userThrow === 1) ? `You're a machine... but the good kind!` : `The machines have won.`;
}