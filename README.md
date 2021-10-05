# PokedexAPI


<p align="center">
  <img alt="Layout da aplicação" width="100%" src="https://raw.githubusercontent.com/LeeonardoVargas/pokedex/master/.github/logo.svg" />
</p>

<p align="center" fontSize="60px">
  Plataforma para listagem de pokémons
</p>

#JavaScript to create a nice PokeDex showcasing some informations about the first 150 pokemons. I'm getting all the information from an external #API, so I'M using the Fetch API inside JavaScript to get the data.



## 💻 Projeto

Desenvolver uma plataforma web para listagem e visualização de pokémons, para a construção deste projeto foi usado JS, HTML e CSS. Todos os dados sobre os pokémons como nome, número, tipo, imagem e entre outras coisas, foram possíveis com o uso da API REST [PokéApi](https://pokeapi.co/).

### Funcionalidades

- [x] **Listagem dos pokémons**: Listar os pokémons com o uso da API REST.

- [ ] **Ampliar a listagem dos pokémons**: Método para adicionar mais pokémons a lista, ampliando-se a quantia de pokémons mostrada ao usuário.

- [ ] **Buscar pokémons**: Método para filtrar os pokémons a partir do seu nome.

- [ ] **Efeito no cartão do pokémon**: Criar uma animação ao usuário apresentar foco no cartão do pokémon.

- [ ] **Selecionar pokémon**: Criar uma página na aplicação com mais detalhes sobre o pokémon escolhido.

- [ ] **Criar seções do pokémons**: Separar as informações do pokémon em três seções: Sobre, Estatísticas, Evoluções.

- [ ] **Seção Sobre**: Dados básicos sobre o pokémon, como altura, peso, fraquezas.

- [ ] **Seção Estatísticas**: Pontos de batalha do pokémon, como vida, ataque, defesa, velocidade, especial ataque e especial defesa.

- [ ] **Seção Evoluções**: Construir a árvore de evolução do pokémon.

### Conceitos abordados

- [ ] Uso de flexbox para alinhar e ajustar elementos na página.

- [ ] Manipulação no eixo z com o uso da propriedade `z-index` no css.

- [ ] Consumo de api com o uso da lib [axios](https://github.com/axios/axios).

- [ ] Conceitos de tipagem no typescript.

- [ ] Uso do conceito de função recursiva para criar a árvore de evolução do pokémon.

- [ ] Controle de paginação na listagem dos pokémons e filtro por nome.

- [ ] Configuração de fonte local.

- [ ] Criando tema global de cores com o `DefaultTheme` do [styled-components](https://www.styled-components.com/).

### Notas

- A listagem dos pokémons foi limitada em 700, pois a partir desse número a api apresenta alguns erros nas informações do pokémon, como imagem, dados de batalha, caracteríscas, dados sobre a evolução.

- As características de batalha de cada pokémon não estão precisas, o motivo disso foi que eu não achei a base do calcúlo de cada espécie, como não existe um padrão geral e são várias espécies eu decidi limitar as informações desse campo.


## 📥 Instalação e execução

Faça um clone desse repositório e acesse o diretório.

```bash
$ git clone git@github.com:anacarolliny/PokedexAPI.git && cd pokedex
```



## :muscle: Contribuir

Faça o `fork` e clone o projeto a partir do seu usuário.

```bash
# Clonando projeto
$ git clone https://github.com/anacarolliny/PokedexAPI/.git

# Criando um branch
$ git branch minha-alteracao

# Acessando o novo branch
$ git checkout -b minha-alteracao

# Adicionando os arquivos alterados
$ git add .

# Criando commit e a mensagem
$ git commit -m "Corrigindo...."

# Enviando alterações para o brach
$ git push origin minha-alteracao
```
Você deve navegar até o seu repositório onde fez o fork e clicar no botão *New pull request* no lado esquerdo da página.


