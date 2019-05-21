const ENDPOINT = 'https://randomuser.me/api/';

const fetchPeople = () => fetch(ENDPOINT).then(response => response.json());

export { fetchPeople };