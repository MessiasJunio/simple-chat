import { http } from './http';
import './websocket/client';
import './websocket/admin';

const consoleMessage = `Server is running on adress: 
http://localhost:3333/pages/client 
http://localhost:3333/pages/admin`


http.listen(3333, () => console.log(consoleMessage));
