# Menu Component Project
## Descrição
Este projeto implementa um componente de menu hierárquico em React, que aceita um JSON de categorias e subcategorias e exibe o menu de forma navegável. O menu utiliza Tailwind CSS para estilização e Flexbox para layout. Cada item do menu e suas subcategorias são apresentados como dropdowns, que aparecem quando o mouse está sobre o item correspondente. O menu é responsivo e harmoniosamente estilizado com uma paleta de cores suaves.

## Funcionalidades
Menu hierárquico baseado em JSON
Dropdowns exibidos ao passar o mouse sobre os itens do menu
Submenus alinhados à direita dos itens pai
Destaque visual nos itens ao passar o mouse
Design responsivo e moderno utilizando Tailwind CSS

## Instalação
1. Clone o repositório:
```
git clone https://github.com/DhymasG/meu-menu-app.git
```
2. Instale as dependências:
```
npm install
```

## Uso
1. Inicie o servidor de desenvolvimento:
```
npm start
```
2. Abra o navegador e vá para http://localhost:3000 para visualizar o menu.

# Arquivos Principais
### menuData.json
Contém os dados do menu em formato JSON

### MenuItem.js
Componente que renderiza cada item do menu e seus submenus

### Menu.js
Componente que renderiza o menu principal

### App.js
Ponto de entrada principal do aplicativo

# Comentários do Código
Os comentários foram adicionados diretamente nos arquivos `MenuItem.js` e `Menu.js` para explicar as escolhas de implementação.
