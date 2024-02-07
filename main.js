document.addEventListener('DOMContentLoaded', function () {
    const url = 'https://api.github.com/users/ogiansouza';
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar os dados do perfil do GitHub.');
            }
            return response.json();
        })
        .then(data => {
            document.querySelector('.profile-name').textContent = data.name || data.login;
            document.querySelector('.profile-username').textContent = `@${data.login}`;
            document.querySelector('.profile-avatar').src = data.avatar_url;
            document.querySelector('.repos').textContent = data.public_repos;
            document.querySelector('.followers').textContent = data.followers;
            document.querySelector('.following').textContent = data.following;
            document.querySelector('.profile-link').href = data.html_url;
        })
        .catch(error => {
            console.error('Erro:', error.message);
        });
});
