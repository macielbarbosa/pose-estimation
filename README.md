# Pose estimation
API para obtenção dos pixels das articulações de uma pessoa presente em uma imagem.

Deploy: http://pose-estimation-api.herokuapp.com

### Instruções para rodar

1.  Clone o repositório ```$ https://github.com/macielbarbosa/pose-estimation.git```
2.  Entre no diretório: `$ cd pose-estimation`
3.  Instale as dependências: `$ npm install`
4.  Inicie o serviço através do comando `$ npm start`

### API

| Rota           | Descrição                                        |
|---------------------|--------------------------------------------------------------------|
| `/header`           | Obter o cabeçalho dos dados                                        |
| `/estimate?url=URL` | Obter as coordenadas das articulações encontradas na imagem da URL |
