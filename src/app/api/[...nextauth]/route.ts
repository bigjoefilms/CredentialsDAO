import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      // Here you can provide your authentication logic
      authorize: async (credentials) => {
        if (credentials?.username === 'user' && credentials?.password === 'pass') {
          return { id: '1', name: 'User', email: 'user@example.com' };
        }
        return null;
      }
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
});