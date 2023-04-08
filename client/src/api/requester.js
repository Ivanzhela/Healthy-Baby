const baseUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000'
    : 'https://dull-ruby-alligator-suit.cyclic.app';

async function requester(method, endpoint, data) {
    let options = { method, headers: {} };

    if (method !== 'GET') {
        options = {
            method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    }

    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (user && user.token) {
        options.headers['X-Authorization'] = user.token;
    }

    const response = await fetch(`${baseUrl}${endpoint}`, options);

    if (!response.ok) {
        throw await response.json();
    };

    return await response.json();
}

export const get = (endpoint) => requester('GET', endpoint);
export const post = (endpoint, data) => requester('POST', endpoint, data);
export const put = (endpoint, data) => requester('PUT', endpoint, data);
export const del = (endpoint, data) => requester('DELETE', endpoint, data);
