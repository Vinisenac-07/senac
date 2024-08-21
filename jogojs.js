let vida = 0;
let nome = prompt(
  "Me fale o seu nome."
);
let inicio = alert(
  `Seja bem-vindo/a ${nome}, vamos começar sua jornada rumo as olimpíadas!`
);
let instruçoes = alert(
  "Instruções: Para cada pergunta tu só deve escolher uma opção e para cada sentença clique em 'enter'. Aqui os seus pontos são muito importantes e seu objetivo é chegar aos 100 pontos."
);
alert(`No momento tu está com ${vida} pontos.`);
let humildade = 0;
alert(`No momento tu está com ${humildade} medalhas de humildade.`);
//Primeira escolha da pessoa
let primeiraEscolha = alert(
  "O ano é 2017 e tu é um/a refugiado/a que está passando por várias dificuldades no seu país por conta de Guerras Civis e muitos conflitos. Para que tu consiga escolher o que fazer, escolha somente uma opção:"
);
let primeiraOpçao = Number(
  prompt(
    "1- Se mudar para França em busca de uma vida melhor, sem perigos envolvendo Guerras. \n2- Ter fé que essa situação vai passar e vai ficar tudo bem. "
  )
);
while (primeiraOpçao != 1) {
  alert("Reveja suas opções para um futuro melhor.");
  vida -= 10;
  primeiraOpçao = Number(
    prompt(
      "1- Se mudar para França em busca de uma vida melhor, sem perigos envolvendo Guerras. \n2- Ter fé que essa situação vai passar e vai ficar tudo bem. "
    )
  );
}
alert(`Bem-vindo/a a França ${nome}!`);
vida += 10;
alert(`No momento tu está com ${vida} pontos.`);
//Segunda escolha da pessoa
let segundaEscolha = alert(
  "Teu futuro no ciclismo só depende de ti, quer começar os seus treinos? Para que tu consiga escolher o que fazer, escolha somente uma opção:"
);
let segundaOpçao = Number(
  prompt(
    "1- Mudar de esporte e começar a treinar do 0. \n2- Iniciar os treinos de ciclismo o quanto antes."
  )
);
while (segundaOpçao != 2) {
  alert(
    "Reveja suas opções para um futuro melhor, treine suas habilidades."
  );
  vida -= 10;
  segundaOpçao = Number(
    prompt(
      "1- Mudar de esporte e começar a treinar do 0 \n2- Iniciar os treinos de ciclismo o quanto antes."
    )
  );
}
alert("Boa escolha, rapidamente seu futuro será disputando nas olimpíadas!");
vida += 10;
alert(`No momento tu está com ${vida} pontos.`);
//Terceira escolha da pessoa
let terceiraEscolha = alert(
  "Tu teve seu primeiro treino, quer expolorar seus limites e ir até a falha? Para que tu consiga escolher o que fazer, escolha somente uma opção:"
);
let terceiraOpçao = Number(
  prompt(
    "1- Quero treinar sabendo dos meus limites para não me lesionar! \n2- Prefiro um treino intenso até a falha."
  )
);
while (terceiraOpçao != 1) {
  alert(
    "Tu não respeitou os seus limites e se lesionou, reveja suas opções para um futuro melhor."
  );
  vida -= 10;
  terceiraOpçao = Number(
    prompt(
      "1- Quero treinar sabendo dos meus limites para não me lesionar! \n2- Prefiro um treino intenso até a falha."
    )
  );
}
alert("Boa escolha, tu respeitou os seus limites e não se lesionou!");
vida += 10;
alert(`No momento tu está com ${vida} pontos.`);
//Quarta escolha da pessoa
let quartaEscolha = alert(
  "Tu foi convocado/a para a sua primeira prova contra-relógio de ciclismo do Campeonato Nacional Francês e tem a chance de ganhar a sua primeira medalha! Para que tu consiga escolher o que fazer, escolha somente uma opção:"
);
let quartaOpçao = Number(
  prompt(
    "1- Não estou me sentindo preparado/a. \n2- Nunca irei deixar passar a oportunidade de ganhar a minha primeira medalha!"
  )
);
while (quartaOpçao != 2) {
  alert("Confie no seu potencial e reveja suas opções para um futuro melhor.");
  vida -= 10;
  quartaOpçao = Number(
    prompt(
      "1- Não estou me sentindo preparado/a. \n2- Nunca irei deixar passar a oportunidade de ganhar a minha primeira medalha! "
    )
  );
}
alert(
  "Boa escolha, tu conquistou a tua primeira medalha no Campeonato Nacional Francês!"
);
vida += 10;
alert(`No momento tu está com ${vida} pontos.`);
//Quinta escolha da pessoa
let quintaEscolha = alert(
  "Seu/sua parceiro/a de treino se machucou, e precisa da sua ajuda. Para que tu consiga ecolher o que fazer, escolha somente uma opção:"
);
let quintaOpçao = Number(
  prompt(
    "1- Não penso duas vezes e vou na direção dele/a para ajudar. \n2- Me importo mais comigo e com a minha carreira."
  )
);
while (quintaOpçao != 1) {
  alert(
    "Trabalhe a sua humildade e reveja suas opções para um futuro melhor."
  );
  vida -= 10;
  quintaOpçao = Number(
    prompt(
      "1- Não penso duas vezes e vou na sa direção dele/a para ajudar. \n2- Me importo mais comigo e com a minha carreira."
    )
  );
}
alert("Boa escolha, você conquistou sua primeira medalha de humildade!");
vida += 10;
humildade += 1;
alert(`No momento tu está com ${vida} pontos.`);
alert(`No momento tu está com ${humildade} medalha de humildade.`);
//Sexta escolha da pessoa
let sextaEscolha = alert(
    "O ano é 2019 e tu tem a oportunidade de defender o seu título do Campeonato Nacional Francês novamente. Escolha somente uma opção: "
  );
  let sextaOpçao = Number(
    prompt(
      "1- Nunca deixaria uma oportunidade dessas passar, vamos pra cima!  \n2- Viajar é muito chato e intediante, prefiro ficar na minha zona de conforto."
    )
  );
  while (sextaOpçao != 1) {
    alert(
      "Defender o seu título é importantíssimo, reveja suas opções para um futuro melhor."
    );
    vida -= 10;
    sextaOpçao = Number(
      prompt(
        "1- Nunca deixaria uma oportunidade dessas passar, vamos pra cima!  \n2- Viajar é muito chato e intediante, prefiro ficar na minha zona de conforto."
      )
    );
  }
  alert(
     "Boa escolha, esse é o seu objetivo. Parabéns! Você ganhou uma medalha de prata."
  );
  vida += 10;
  alert(`No momento tu está com ${vida} pontos.`);
 
//Sétima escolha da pessoa
let setimaEscolha = alert(
  "Tu irá acabar tendo que enfrentar uma pandemia, tu está muito triste pois seus treinos serão cancelados, para que tu consiga escolher a sua linha de pensamento, escolha somente uma opção:"
);
let setimaOpcao = Number(
  prompt(
    "1- A pandemia só vai me trazer perdas, coisas ruins e só quero ver tudo pelo pior lado porque não consigo ver nada de bom nisso. \n2- Nesse momento difícil, eu preciso lembrar que a minha força é maior do que qualquer coisa. Eu sou capaz de superar qualquer desafio."
  )
);
while (setimaOpcao != 2) {
  alert( "Tu pode e deve ser mais positivo/a, não tem o porque de ver as coisas pelo lado negativo! Reveja suas opções para um futuro melhor");
  vida -= 10;
  setimaOpcao = Number(
    prompt(
      "1- A pandemia só vai me trazer perdas, coisas ruins e só quero ver tudo pelo pior lado porque não consigo ver nada de bom nisso. \n2- Nesse momento difícil, eu preciso lembrar que a minha força é maior do que qualquer coisa. Eu sou capaz de superar qualquer desafio."
    )
  );
}
alert(
  "Boa escolha, em um momento igual a esse o que mais precisamos é ter força!"
);
vida += 10;
alert(`No momento tu está com ${vida} pontos.`);
//Oitava escolha da pessoa
let oitavaEscolha = alert(
  "A tua preparação física é essencial agora, tu está muito perto de chegar as olimpíadas. Para que tu consiga escolher o que fazer, escolha somente uma opção:"
);
let oitavaOpcao = Number(
  prompt(
    "1- Vou me focar totalmente na minha saúde e no meu físico, só vou me alimentar com coisas saudáveis para nada dar errado! \n2- Não me importo nenhum pouco com a minha alimentação, já treino mesmo então se eu comer besteira nem vai mudar nada."
  )
);
while (oitavaOpcao != 1) {
  alert(
    "Tua escolha não foi nada inteligente, reveja suas opções para um futuro melhor."
  );
  vida -= 10;
  oitavaOpcao = Number(
    prompt(
      "1- Vou me focar totalmente na minha saúde e no meu físico, só vou me alimentar com coisas saudáveis para nada dar errado! \n2- Não me importo nenhum pouco com a minha alimentação, já treino mesmo então se eu comer besteira nem vai mudar nada."
    )
  );
}
alert(
   "Boa escolha, nada é mais importante quanto a sua preparação física agora!"
);
vida += 10;
alert(`No momento tu está com ${vida} pontos.`);
//Nona escolha da pessoa
let nonaEscolha = alert(
  "Tu finalmente chegou as Olimpíadas de Paris 2024, toda a sua preparação e dedicação não foram em vão. Porém tu percebeu que os/as teus/tuas adversários/as não estão nenhum pouco confiantes. Para que tu consiga escolher o que fazer, escolha somente uma opção: "
);
let nonaOpcao = Number(
  prompt(
    "1- Deixar eles/as ficar sem confiaça porque assim terei mais chance de ganhar e menos adversários/as para disputar comigo. \n2- Ir até eles/as e ajudar falando para confiar em si mesmo e apoiando-os/as, dizendo que eles/as trabalharam muito para chegar até aqui."
  )
);
while (nonaOpcao != 2) {
  alert(
    "Tu deve se colocar no lugar das pessoas, porque tu também pode precisar de ajuda! Reveja suas opções para um futuro melhor"
    );
  vida -= 10;
  nonaOpcao = Number(
    prompt(
      "1- Deixar eles/as ficar sem confiaça porque assim terei mais chance de ganhar e menos adversários/as para disputar comigo. \n2- Ir até eles/as e ajudar eles/as falando para confiar em si mesmo e apoiando eles/as, dizendo que eles/as trabalharam muito para chegar até aqui."
    )
  );
}
alert(
    "Boa escolha, a humildade é uma das suas grandes qualidades!"
);
vida += 10;
humildade += 1;
alert(`No momento tu está com ${vida} pontos.`);
alert(`No momento tu está com ${humildade} medalhas de humildade.`);
//Décima escolha da pessoa
let decimaEscolha = alert(
  "Tu finalmente chegou no pódio em segundo lugar, depois de tanto trabalhar duro e se dedicar ao máximo. Para que tu consiga escolher a sua emoção momentânea, escolha somente uma opção: "
);
let decimaOpcao = Number(
  prompt(
    "1- Me chatear porque eu queria a medalha de ouro.\n2- Ficar muito feliz porque eu consegui ser o/a segundo/a melhor no meu esporte no meio de tantos/as atletas bons/as e capacitados/as."
  )
);
while (decimaOpcao != 2) {
  alert(
    "Meus parabéns, se tu conseguiu chegar até aqui é porque tu realmente trabalhou duro, se dedicou e se empenhou ao máximo, fazendo de tudo para conseguir chegar a esse pódio."
  );
  vida -= 10;
  decimaOpcao = Number(
    prompt(
      "1- Me chatear porque eu queria a medalha de ouro.\n2- Ficar muito feliz porque eu consegui ser o/a segundo/a melhor no meu esporte no meio de tantos/as atletas bons/as e capacitados/as."
    )
  );
}
if (vida >= 100)
{
  alert("${nome} tu foi muito bem na competição e conquistou a vitória com um total de ${vida} pontos! Tu conseguiu superar a marca dos 100 pontos e fez uma atuação magnífica. Parabéns por essa conquista brilhante! ${} agora tu está pronto/a para arrebentar ainda mais nas Olimpíadas! Fim de jogo.")  
}
else
{
  alert(`${nome} tu foi um espetáculo na competição, conseguindo chegar perto dos 100 pontos que necessitava para ganhar. Com ${vida} pontos, tu mostrou uma dedicação muito boa. Mesmo que tu não tenha vencido, foi um desempenho muito bom e tu está de parabéns por ter conseguido chegar tão longe. Gigantes coisas estão por vir! Fim de jogo.`)
}