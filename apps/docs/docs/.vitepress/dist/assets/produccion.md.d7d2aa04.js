import{_ as s,c as a,o as n,a as l}from"./app.687f9be3.js";const A=JSON.parse('{"title":"Despliegue en producción","description":"","frontmatter":{"title":"Despliegue en producción"},"headers":[{"level":2,"title":"Requerimientos","slug":"requerimientos","link":"#requerimientos","children":[]},{"level":2,"title":"Pasos para la instalación","slug":"pasos-para-la-instalacion","link":"#pasos-para-la-instalacion","children":[]},{"level":2,"title":"Actualización","slug":"actualizacion","link":"#actualizacion","children":[]}],"relativePath":"produccion.md"}'),e={name:"produccion.md"},o=l(`<h1 id="instalacion" tabindex="-1">Instalación <a class="header-anchor" href="#instalacion" aria-hidden="true">#</a></h1><h2 id="requerimientos" tabindex="-1">Requerimientos <a class="header-anchor" href="#requerimientos" aria-hidden="true">#</a></h2><p>Para hacer la Instalación del <code>The Mentes</code> se debe tener los siguientes requerimientos:</p><ul><li>Poseer un sistema operativo Linux (Ubuntu 20.04 LTS)</li><li>Tener instalado Docker y Docker Compose</li><li>Tener abiertos los puertos 80 y 443 para el frontend y 3000 para el backend de la API</li><li>Tener instalado NGINX como proxy inverso</li></ul><h2 id="pasos-para-la-instalacion" tabindex="-1">Pasos para la instalación <a class="header-anchor" href="#pasos-para-la-instalacion" aria-hidden="true">#</a></h2><ol><li>Clonar el repositorio de GitHub</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">url</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">del</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">repositorio</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>Entrar a la carpeta del repositorio</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">the-mentes</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>Crear el archivo .env y configurar las variables de entorno</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">touch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.env</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>Asignar las variables de entorno</li></ol><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># PLATFORM/FRONTEND</span></span>
<span class="line"><span style="color:#A6ACCD;">PLATFORM_EXPOSE_PORT = 8080</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># API SIGAR</span></span>
<span class="line"><span style="color:#A6ACCD;">API_EXPOSE_PORT = 3000</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># MONGO DB</span></span>
<span class="line"><span style="color:#A6ACCD;">MONGO_EXPOSE_PORT = 27017</span></span>
<span class="line"><span style="color:#A6ACCD;">MONGO_ROOT_USER = &quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">MONGO_ROOT_PASSWORD = &quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="5"><li>ejecutar el comando para crear las imagenes de docker</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">compose</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--no-cache</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">2g</span></span>
<span class="line"></span></code></pre></div><ol start="6"><li>Ejecutar el comando para iniciar los contenedores</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">compose</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">up</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span></span>
<span class="line"></span></code></pre></div><ol start="7"><li>Configurar NGINX</li></ol><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen 80;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server_name sigarcloud.com;</span></span>
<span class="line"><span style="color:#A6ACCD;">    return 301 https://$server_name$request_uri;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="8"><li>Configurar el certificado SSL</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">certbot</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sigarcloud.com</span></span>
<span class="line"></span></code></pre></div><ol start="9"><li>Reiniciar NGINX</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span></span>
<span class="line"></span></code></pre></div><ol start="10"><li>comprobar que todo este funcionando</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ps</span></span>
<span class="line"></span></code></pre></div><ol start="11"><li>Comprobar el sistema en la web con la url del dominio o ip del servidor</li></ol><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">https://sigarcloud.com</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="actualizacion" tabindex="-1">Actualización <a class="header-anchor" href="#actualizacion" aria-hidden="true">#</a></h2><p>Para actualizar el sistema se deben seguir los siguientes pasos:</p><ol><li>Entrar a la carpeta del repositorio</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sigar-cloud</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>Actualizar el repositorio</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>Actualizar las imagenes de docker</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">compose</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--no-cache</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">2g</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>Reiniciar los contenedores</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">compose</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">up</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span></span>
<span class="line"></span></code></pre></div><ol start="5"><li>Comprobar que todo este funcionando</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ps</span></span>
<span class="line"></span></code></pre></div><ol start="6"><li>Comprobar el sistema en la web con la url del dominio o ip del servidor</li></ol><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">https://sigarcloud.com</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,41),p=[o];function t(c,i,r,d,C,y){return n(),a("div",null,p)}const h=s(e,[["render",t]]);export{A as __pageData,h as default};