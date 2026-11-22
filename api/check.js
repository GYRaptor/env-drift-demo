const { parseEnv, compare } = require('@gyraptor/env-drift');

module.exports = (req, res) => {
  if (req.method !== 'POST') {
    return res.status(400).json({ error: 'Method must be POST' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ error: 'Invalid JSON body' });
    }
  }

  if (!body || typeof body !== 'object') {
    return res.status(400).json({ error: 'Body must be an object' });
  }

  const { example, env } = body;
  if (typeof example !== 'string' || typeof env !== 'string') {
    return res.status(400).json({ error: 'example and env must both be strings' });
  }

  try {
    const expected = parseEnv(example);
    const actual = parseEnv(env);
    const result = compare(expected, actual);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: 'Failed to process environment variables' });
  }
};
