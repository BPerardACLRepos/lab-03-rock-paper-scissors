export function didUserWin(userThrow, computerThrow) {
    if (userThrow === computerThrow) {
        return `You tied, back to the drawing board...`;
    }
    const outcome = userThrow + computerThrow;
    if (outcome === 3) {
        return (userThrow === 2) ? `You won! You're a machine... but the good kind!` : `You lost! The machines have won.`;
    } else if (outcome === 2) {
        return (userThrow === 0) ? `You won! You're a machine... but the good kind!` : `You lost! The machines have won.`;
    }
    return (userThrow === 1) ? `You won! You're a machine... but the good kind!` : `You lost! The machines have won.`;
}

export function getRandomThrow() {
    return Math.floor(Math.random() * 3);
}
