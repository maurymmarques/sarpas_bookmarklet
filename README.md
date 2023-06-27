**Note:** This is a bookmarklet to make filling out forms for drone flights in Brazil easier

**Nota:** Este projeto foi descontinuado porque o sistema do SARPAS foi atualizado

**O objetivo desse [bookmarklet](https://pt.wikipedia.org/wiki/Bookmarklet) é facilitar o preenchimento dos formulários [SARPAS](https://servicos.decea.mil.br/sarpas) ([DECEA](https://www.decea.mil.br)) para solicitação de voos.**

**Esse bookmarklet...**

- pode ser usado em desktops ou dispositivos móveis (não testei no iOS)
- irá preencher os dados de latitude e longitude (passo 3/4) com base na sua localização atual
- irá preencher os dados do formulário (passo 4/4) com os dados do solicitante

## ATENÇÃO

---

- **Esse projeto NÃO visa burlar qualquer regra, muito menos isentar o solicitante de qualquer responsabilidade.**
- **O solicitante do voo sempre deverá ler todos os dados do formulário antes de enviar a solicitação para o DECEA.**

**Siga todas as normas de segurança, faça um voo consciente e responsável.**

---

## Instalação

- Copie o conteúdo do arquivo [sarpas_bookmarklet.js](https://github.com/maurymmarques/sarpas_bookmarklet/blob/master/sarpas_bookmarklet.js) para um editor de texto qualquer (você pode usar o editor do GitHub clicando [aqui](https://github.com/maurymmarques/sarpas_bookmarklet/edit/master/sarpas_bookmarklet.js)).
- Edite os dados das `Variáveis` de acordo com seus dados de voo.

![Variables Screenshot](https://github.com/maurymmarques/sarpas_bookmarklet/raw/master/media/variables_screenshot.png)

- Copie todo o conteúdo do arquivo editado.
- No seu navegador, *favorite* um site qualquer (pode ser o [https://www.decea.mil.br](https://www.decea.mil.br)).
- Agora edite esse favorito com o nome desejado (exemplo: "Formulário SARPAS"), e no campo URL cole todo o conteúdo copiado do editor.

É isso mesmo, você cola o código no lugar do URL e pronto! :)

![Bookmark Screenshot](https://github.com/maurymmarques/sarpas_bookmarklet/raw/master/media/bookmark_screenshot.png)

## Como usar

- *Logado* no [SARPAS](https://servicos.decea.mil.br/sarpas), vá para a solicitação de voo.
- Escolha a Aeronave que será utilizada (passo 1/4)
- Escolha o Tipo de Operação (passo 2/4)
- Quando estiver em **Localização da Operação** (passo 3/4) e em **Formulário da Operação** (passo 4/4)...

    - **no desktop:** apenas clique sobre o favorito.
    - **em dispositivos móveis:** clique sobre a barra de endereços, procure pelo nome do seu favorito e clique sobre o mesmo.

![Bookmarklet Demonstration](https://github.com/maurymmarques/sarpas_bookmarklet/raw/master/media/bookmarklet_demonstration.gif)

## Links

[DECEA](https://www.decea.mil.br) (Departamento de Controle do Espaço Aéreo)

[SARPAS](https://servicos.decea.mil.br/sarpas) (Solicitação de Acesso de Aeronaves Remotamente Pilotadas)