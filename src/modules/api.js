const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zXIRZKSjECQ4ZWKpNQxT/scores/';

// Get Scores from API
export const getUserScores = async () => {
  const response = await fetch(url);
  const final = response.json();
  return final;
};

// POST Score
export const postScore = async (name, points) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: name,
      score: points,
    }),
  });
  const final = response.json();
  return final;
};

export default { getUserScores, postScore };
