---
slug: 'dominio'
title: 'Dominio'
subtitle: 'Você sabia que milhares de pessoas no mundo acreditam que a _Internet_ **é** o _Facebook_?
Pelo menos foi isso que mostrou o relatório da saúde da internet, de 2017, criado pela Mozilla. Só no Brasil, 55% dos entrevistados pensavam assim.'
image: '/posts/000/helloworld.jpg'
createdAt: '2021-12-01'
---

Oi, tudo bem?

Você sabia que já são quase 2 **bilhões** de domínios registrados na internet? Isso mesmo, 2 bilhões de combinações de "www-ponto-nome-do-site-ponto-com-bla-bla-bla". Já tá ficando difícil achar algum nome bom para um site. Claro que esse problema eu não tive. Olha meu site: [www.belclei.dev.br](http://www.belclei.dev.br)

Se bem que, nome bom... 🤔Bom, você me entendeu.

Ah, mas por mais que o nome não ajude muito, o resultado ficou muito legal. Dá uma olhadinha lá depois.

No vídeo de hoje eu vou falar um pouco sobre como funciona esta sistemática de nomes de site na internet. Vem comigo.

Meu nome é Belclei _<como?>_ Bel, clei.

É um prazer te ter aqui, comigo. Este conteúdo é todo pensado para que gere valor para você. Me conta aqui nos comentários se eu estou no caminho certo?

### Domínio

Quando a gente fala de domínio, está se referindo ao nome do site. Tipo: "www.belclei.dev.br"

A gente pode dividir um domínio em 4 partes:

- O "www" é o subdomínio. Esse é o padrão. Tanto que você nem precisa mais escrever ele. O navegador vai saber que é "www". Mas nem todo site é assim. Você pode acessar o gmail, por exemplo, digitando: mail.google.com.
- O nome de domínio em sí geralmente é o nome da empresa. No meu caso é o meu nome mesmo.
- A seguir vem a extensão. A mais conhecida, claro, é a .com. Em português a gente chama esta parte de Domínio de Primeiro Nível. Em inglês é Generic Top-Level Domain (gTLD). Seu uso costuma expressar qual a categoria do site. Você já deve ter visto também a .gov para sites governamentais, ou a .edu para sites de universidades. Não é obrigatório que você utilize a extensão conforme a categoria exata, embora isso possa fazer a diferença par as pessoas encontrarem mais facilmente o teu site. Hoje já são mais de 250 domínios de primeiro nível, e contando.
- E por último a sigla do país. Sites americanos não precisam e geralmente o domínio acaba no .com mesmo. Os sites brasileiros acabam em .br, os argentinos em .ar, os do reino unido em .uk, e por aí vai.

Quando for registrar o seu domínio, considere todas essas combinações. Um domínio marcante é sempre mais lembrado e tem sempre vantagem em relação a concorrência.

Existe uma entidade que supervisiona toda essa parte de alocação de domínios, o ICANN (Corporação da Internet para Atribuição de Nomes e Números). No Brasil, os domínios são registrados no site registro.br.

### DNS

Podemos dizer que o domínio é como se fosse o letreiro com o nome da tua loja. Mas o ponto comercial em sí é o servidor web. E a opção que a maioria das pessoas faz é pelo aluguél, ou seja, pela hospedagem do site em algum servidor.

Este servidor web fornece um endereço de IP fixo. Na realidade é esse o endereço do site. Um IP.

Imagina só, você ter que decorar esses números aí para os sites que você quiser acessar. Em vez de acessar "google.com", você usaria "216.58.202.174". Ainda bem que inventaram os servidores DNS, que conseguem fazer essa relação entre endereço de IP e domínio. DNS aliás, significa justamente Sistema de Nomes de Domínios.

Além de deixar a navegação mais rápida, muitos servidores DNS contam com a detecção de sites falsos ou infectados e até sistema de proteção parental para bloquear sites de conteúdo adulto. Você pode configurar seu roteador para que utilizem servidores bons servidores, como é o caso do OpenDNS, Google Public DNS e Comodo Secure DNS. Por padrão, o Sistema de Nomes de Domínio que utilizamos é oferecido pelo nosso provedor de internet.

Curiosidade: Alguns dos ataques hackers mais comuns dos últimos tempos tentam alterar, ou enganar o servidor de DNS que o teu computador acessa. Aí quando você estiver tentando acessar o site do teu banco, por exemplo, este novo servidor direciona você para um site igualzinho, mas feito por criminosos para roubar os teus dados. Tenso né? Bom, felizmente sites de bancos são difíceis de serem copiados, e se você desconfiar de alguma coisa, é só errar a senha de propósito. O site malicioso vai simular sempre que você conseguiu fazer o login.

Tá gostando do conteúdo? Eu resolvi criar este canal para que a gente aprenda juntos, com muito conteúdo, mas também descontração. Então é este o favor que eu quero te pedir. Clicando aqui embaixo no curtir, você estará contribuindo com esta empreitada.

### URL

É muito comum confundir domínio com URL. Mas o domínio está CONTIDO na URL.

A URL é o famoso link. Quando você quer mostrar um site bacana para o seu amigo, ou repassar aquela promoção imperdível, o que você faz? Manda o link. No mundo real, o correspondente à URL seria um endereço. É uma referência que pode ser utilizada para encontrar qualquer "recurso informático". Seja um site, ou uma impressora, etc. Tudo o que está na rede, possui um endereço, uma URL. E você sabe qual é a anatomia da URL de um site? Pois então eu vou te contar:

protocolo://dominio:porta/recurso?query_string#fragmento

A primeira parte é o _protocolo_: os mais comuns são HTTP e HTTPS. Tem também o FTP, para a transferência de arquivos. O SMTP é para e-mails. Enfim, são vários. Podemos dizer que nesta parte especificamos qual o tipo de comunicação teremos entre computadores. Fazendo uma relação com os correios, aqui é onde eu digo o tipo da encomenda. PAC, carta, ou telegrama, por exemplo.

A segunda parte é o domínio, que eu acabei de te contar como funciona.

A seguir vem a porta. Imagine que você faz entregas, e alguém neste lugar aí fez uma encomenda. Se você só tiver o endereço do edifício, ou o nome da loja, vai ser muito difícil encontrar a pessoa. Vai ser muito mais fácil se ela informar a **porta** pela qual porta deve entrar a tua requisição no servidor. Você nunca utilizou isso né? É que teu navegador é espertinho. Ele sabe sabe o número da porta de acordo com o protocolo que estamos utilizando. Quando estamos utilizando o protocolo HTTP, geralmente a porta que utilizamos é a 80, ou 8080. A porta padrão do HTTPS é a 443. Quer fazer um teste? Acessa aí [https://www.google.com.br/](https://www.google.com.br/) ou se acessar https://www.google.com.br:443/, vai funcionar. Agora, se errar o número da porta, o navegador fica confuso e não consegue te dar a resposta esperada.

Agora vem o recurso. Ele geralmente identifica qual página do site eu quero acessar. Por exemplo: [https://twitter.com/](https://twitter.com/home)belclei, para ver os meus twittes. Algumas vezes podemos acabar precisando especificar ainda mais o que queremos. É o caso onde, por exemplo, estamos querendo ver as mídias que eu compartilhei, em vez dos twittes. Neste caso a URL fica assim: [https://twitter.com/belclei/media](https://twitter.com/belclei/media).

A parte chamada de queryString se trata dos parâmetros que precisamos informar ao site para ele saber as informações que ele vai nos apresentar na página. Esta é a URL de uma busca simples no google: [https://www.google.com/search?q=belclei](https://www.google.com/search?q=belclei). A queryString é o que vem depois da interrogação. Identificamos então, que o parâmetro "q" informa ao site do google qual o termo queremos buscar. Se houvesse mais um parâmetro, eles seriam separados por "&". Exemplificando, se quiséssemos passar também o parâmetro "x" com o valor 2 para o site do google, a URL ficaria assim: [https://www.google.com/search?q=belclei&x=2](https://www.google.com/search?q=belclei&x=2)

E a última divisão de uma URL é o fragmento da página que estará posicionado na tela. O Wikipedia utiliza muito este recurso. Cada título de seus artigos possui esta referência. Por exemplo: [https://pt.wikipedia.org/wiki/Bocha#Bocha_no_Brasil](https://pt.wikipedia.org/wiki/Bocha#Bocha_no_Brasil)

Veja como ele posiciona o texto exatamente onde solicitamos.

Um último detalhe que eu quero comentar aqui contigo sobre URL é o tal do **encoding**.

Tomando como base esta última URL, perceba que os espaços foram substituídos por _undeline (\_)_, para o texto ficar mais claro para quem lê.

Você bem sabe que uma URL com espaços não existe. Será? Bom. Tecnicamente não. Mas sim. hehe

Acontece que existe uma tabela que pode ser usada para representar, por exemplo, um caractere de espaço em uma URL. No caso, basta utilizar %20.

Voltemos para a URL de uma busca no google. Eu disse antes que você pode separar um parâmetro do outro utilizando &. Mas e se eu quiser pesquisar, por exemplo por Chitãozinho & Xororó https://www.google.com/search?q=Chit%C3%A3ozinho+%26+Xoror%C3%B3
Note a quantidade de caracteres especiais nesta pesquisa. E olhe que poderia ser pior. No caso do google, o caractere de espaço, que deveria ser %20 também pode ser substituido por +. Mas se você colocar um + no campo de busca ele substitui por %2B.

A representação de & nesta tabela de encoding é %26.

O tema encoding é muito rico. Remonta lá do início da computação. Eu, particularmente, acho bastante interessante. Se vocês demonstrarem interesse aqui nos comentários, eu faço um vídeo sobre isso.

[Encoding](https://www.notion.so/Encoding-1e08ca5efb774045b12f933992cc28ad)

Agora que você já aprendeu, preste atenção às URLs dos sites que você acessa. Como agora você já sabe como funciona, pode ler a URL daquele SMS que você recebeu,

São muitos os golpes de pessoas mal intencionadas que criam sites maliciosos, e hospedam em URLs muito parecidas com as de um banco, por exemplo. Aí basta conseguir te enviar um SMS, ou um e-mail com um texto que aguce tua criatividade, ou te deixe assustado. Se você não ler a URL antes de clicar, pode ser facilmente enganado e acabar entregando teus dados de bandeja para o bandido.

Você já sabia destas informações? Foi útil o conteúdo? Conta aqui abaixo o que você achou. Seu feedback é muito importante para que eu seja cada vez mais relevante pra ti.

Eu estou preparando bastante conteúdo, as vezes teórico, as vezes prático, mas sempre descontraído, descomplicado e útil pra você que quer evoluir no mundo do desenvolvimento de software. Então sugiro que você se inscreva neste canal, e que ative as notificações, porque assim você vai poder receber tudo em primeira mão.

Muito obrigado por ficar até o final!

Já já tem muito mais!

Um abraço
