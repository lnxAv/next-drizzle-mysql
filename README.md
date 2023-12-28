[![screencapture-localhost-3000-en-2023-12-21-01-10-11.png](https://i.postimg.cc/YqJQLbk2/screencapture-localhost-3000-en-2023-12-21-01-10-11.png)](https://postimg.cc/fJfV67J1)

# 📙About

Create instant MySql **gratification** with a light, types safe ORM offering time saving tools. Pain-pleasure principle am I right?

## ⚙️Installation

### [Step - 1 Create]

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world&env=DATABASE_USER,DATABASE_PASSWORD,DATABASE_HOST,DATABASE_PORT,DATABASE_SCHEMA&envDescription=Drizzle%20db%20credentials&project-name=next-drizzle-mysql-starter&repository-name=next-drizzle-mysql-starter&demo-title=Next.js%20-%20Drizzle%20-%20MySQL&demo-description=Create%20instant%20MySql%20gratification%20with%20a%20light%2C%20types%20safe%20ORM&demo-url=https%3A%2F%2Fnext-drizzle-mysql.vercel.app%2Fen&demo-image=https%3A%2F%2Fi.postimg.cc%2FYqJQLbk2%2Fscreencapture-localhost-3000-en-2023-12-21-01-10-11.png)<br/>
Or </br>
`npx create-next-app https://github.com/lnxAv/next-drizzle-mysql`

### [Step - 2 Connect]

<details>
<summary><h3>I'm using Vercel</h3></summary>
1. In your browser, go to your deployment settings > Environment Variables</br>
2. Fill the following variable accordingly </br>
  ( Note: You can separate production & development env's for security purpose ) 
  <pre>DATABASE_USER, DATABASE_PASSWORD, DATABASE_HOST, DATABASE_PORT, DATABASE_SCHEMA</pre>
3. In your project terminal type <pre>Vercel env pull</pre>
  ( Note: You can also type "vercel env ls" to list them )
</details>
<details>
<summary><h3>I'm using npm create-next-app</h3></summary>
1. In your project root add a `.env.local` file</br>
2. Copy paste and fill accordingly
  <pre>
    # Development variables
    DATABASE_USER="root"
    DATABASE_PASSWORD="admin"
    DATABASE_SCHEMA="database"
    DATABASE_HOST="localhost"
    DATABASE_PORT="3306"
  </pre>
<br><br>
</details>

### [Step - 3 Migrate]

<details>
<summary><h3>I'm using a new database</h3></summary>
1. Push the example tables in your new database with
  <pre>npx drizzle-kit push:mysql</pre>
2. Populate your database with the magic button </br>
3. Read the documentation below and enjoy :)
</details>
<details>
<summary><h3>I'm using my own database</h3></summary>
1. Pull your database DDL with
  <pre>npm run pull-db</pre>
2. Copy/Paste the content From => To
  <pre>database/drizzle/schema.ts => database/db_tables.ts</pre>
2. Get your data by modifying the example in
  <pre>app/api/route.ts</pre>
4. If needed, modify the "magicAction" to populate your database. </br>
5. Read the documentation below and enjoy :)
</details>

## 🔰Database Setup

For unfamilliar users, you can easily deploy your own database, </br>
Grab a coffee and learn the basics in 17 minutes. </br>
[MySQL - The Basics // Learn SQL in 23 Easy Step](https://youtu.be/Cz3WcZLRaWc "MySQL - The Basics // Learn SQL in 23 Easy Step") </br>
[![MySQL - The Basics // Learn SQL in 23 Easy Step](http://img.youtube.com/vi/Cz3WcZLRaWc/0.jpg)](https://youtu.be/Cz3WcZLRaWc "MySQL - The Basics // Learn SQL in 23 Easy Step")

## 🤖Commands

|                                **npm run**                                 | **Description**                                                                      |
| :-------------------------------------------------------------------- | :-------- |
| dev  | Launch the project in development mode       |
| build | Build the project, great to see package size  |
|  start | Launch the built project |
|  prettier | Clean files according to `.prettierrrc.json` |
| lint  | Verify files according to `.eslintrc.json` |
| [Migrate](https://orm.drizzle.team/docs/migrations#run-the-migrations) | Run the migrations with Drizzle | 
[drop](https://orm.drizzle.team/kit-docs/commands#drop-migration) | Lets you delete previously generated migrations from migrations folder |
| [pull-db](https://orm.drizzle.team/kit-docs/commands#introspect--pull) | Lets you pull DDL from existing database and generate a `schema.ts` |
| [push-db](https://orm.drizzle.team/kit-docs/commands#prototype--push)  | Lets you push your schema changes directly to the database |
|  [studio-db](https://orm.drizzle.team/drizzle-studio/overview) | Drizzle Studio is a new way for you to explore SQL database on Drizzle projects. |

## 🛠️Tools documentation
| **Categories** | **Links**  |
| :---- | :------- |
| Cores |  [**Next.js**](https://nextjs.org/docs), [**Vercel**](https://vercel.com/docs), [**Drizzle ORM**](https://orm.drizzle.team/docs/overview) |
| Traductions |  [next-international](https://next-international.vercel.app/docs) |
| Providers |  [Next-Themes](https://github.com/pacocoursey/next-themes) |
|  Fetcher |  [SWR.js](https://swr.vercel.app/docs/getting-started) |
| Animation |  [Motion.dev](https://motion.dev/guides/quick-start) |
| Dev Dependencies |  [husky](https://typicode.github.io/husky/getting-started.html), [dotenv](https://www.npmjs.com/package/dotenv), [drizzle-kit](https://orm.drizzle.team/kit-docs/overview) |
| | **Total:** 50kb|



