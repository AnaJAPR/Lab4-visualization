<svelte:head>
  <title>Contact me</title>
</svelte:head>

<h1> Contatos </h1>
    <p>Para entrar em contato comigo, envie um email pelos campos a seguir:</p>
    <h1>Preencha</h1>
    <form action="mailto:anajulia.smsap2@gmail.com" method="get">
        <label for="email">Email:</label><br>
        <input name="email" type="email"><br>
        <label for="subject">Assunto:</label><br>
        <input name="subject"><br>
        <label for="body">Body:</label><br>
        <textarea name="body"></textarea> <br>
        <button>Submit</button>
    </form>

