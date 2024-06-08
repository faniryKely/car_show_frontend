const authProvider = {
    // appeler pour connecter l'utilisateur
    login: async ({ email, password }: { email: string, password: string }) => {
        const request = new Request('http://localhost:8080/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        const response = await fetch(request);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const { token } = await response.json();
        console.log(token);
        localStorage.setItem('token', token);
    },
    // appeler pour déconnecter l'utilisateur
    logout: () => {
        localStorage.removeItem('token');
        return Promise.resolve();
    },
    // appeler lors de chaque requête pour vérifier les permissions
    checkAuth: () => {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    },
    // appeler lors de chaque requête pour vérifier les erreurs d'authentification
    checkError: (error: any) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // appeler lors de chaque requête pour obtenir le rôle de l'utilisateur
    getPermissions: () => {
        return Promise.resolve();
    },
};

export default authProvider;
