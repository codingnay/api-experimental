<h2>Projeto CRUD Catálogo de Obras de arte</h2>
<p>Projeto individual do Módulo 6: aplicação backend de uma API e banco de dados em MySQL para o gerenciamento de um catálogo de obras de arteS. Projeto individual para o bootcamp da Resilia Educação, em parceria com o Senac RJ e os Programadores Carioca.</p>

<h3>Instalação</h3>
<ol>
  <li>Verifique se o Node.js e o NPM estão instalados</li>
  <li>Clone o repositório</li>
  <li>Acesse o diretório onde o repositório foi clonado</li>
  <li>Instale as dependencias, comandando:</li>
  
  <blockquote>
    npm install --save
  </blockquote>
  
  <li>Rode o servidor, comandando:</li>
  <blockquote>
    node index.js
  </blockquote>
</ol>

<h3>Listagem de rotas de acesso</h3>

<h4>Rotas de obras de arte</h4>
<ol>
  <li>GET("/obras/") - Lista todas os registros cadastrados</li>
  <li>GET("/obras/:id") - Retorna um resgistro epecífico</li>
  <li>GET("/obras/artista/:id") - Retorna todos os registro de um único artista</li>
  <li>GET("/obras/museu/:id") - Retorna todos os registro de um único museu</li>
  <li>POST("/obras/") - Adiciona um novo registro</li>
  <li>PUT("/obras/:id") - Edita um registro</li>
  <li>DELETE("/obras/:id") - Deleta um registro</li>
</ol>

<h4>Rotas de artistas</h4>
<ol>
  <li>GET("/artistas/") - Lista todos os registros</li>
  <li>GET("/artistas/:id") - Lista um registro específico</li>
  <li>POST("/artistas/") - Adiciona um novo registro</li>
  <li>PUT("/artistas/:id") - Edita um registro</li>
  <li>DELETE("/artistas/:id") - Deleta um registro</li>
</ol>

<h4>Rotas de museus</h4>
<ol>
  <li>GET("/museus/") - Lista todos os registros</li>
  <li>GET("/museus/:id") - Lista um registro específico</li>
</ol>

<h4>Rotas de movimento</h4>
<ol>
  <li>GET("/movimento/") - Lista todos os registros</li>
  <li>GET("/movimento/:id") - Lista um registro específico</li>
</ol>

<h4>Rotas de admin</h4>
<ol>
  <li>GET("/admin/:id") - Retorna um único registro</li>
  <li>POST("/login/") - Envia dados de login</li>
</ol>
