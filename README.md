# Logic Jigsaw — landing page

Site em Next.js para apresentar o jogo e oferecer o APK de Android. Google Play e App Store ficam como “Em breve”.

O botão **Baixar APK para Android** aponta para `/download`. Essa rota consulta a API do Expo e redireciona para o APK da build Android mais recente. O endereço do site não precisa mudar a cada build.

## Como o APK é escolhido

1. Com `EXPO_TOKEN` na Vercel, o servidor busca a última build Android **finished** do perfil `preview` (o perfil que gera APK em `eas.json`).
2. Se essa build não tiver um `.apk`, entra a última build Android pronta que também seja APK, exceto o perfil `development`.
3. Sem token, ou se o Expo não responder, vale `APK_DOWNLOAD_URL` (HTTPS).
4. Sem URL, o site usa o arquivo `public/logic-jigsaw.apk`, se ele existir no deploy.

O perfil `production` gera AAB para a Play Store. Esse arquivo não é oferecido no botão, porque o Android não instala AAB direto.

A consulta fica em cache por cerca de 5 minutos.

## Publicar na Vercel

1. Importe este repositório em [vercel.com/new](https://vercel.com/new).
2. Crie um token em [expo.dev](https://expo.dev) → conta → Settings → Access tokens.
3. Em Settings → Environment Variables, defina `EXPO_TOKEN`.
4. Gere uma build instalável no app:

```bash
npx eas-cli build -p android --profile preview
```

Depois que a build termina, o botão do site passa a baixar esse APK. Não é preciso alterar a landing page.

## Desenvolvimento

```bash
npm install
npm run dev
```

Copie `.env.example` para `.env.local` e preencha `EXPO_TOKEN` para testar o download automático.
