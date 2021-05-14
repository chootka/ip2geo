import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import ip2loc from 'ip2location-nodejs';

ip2loc.IP2Location_init("./db/IP2LOCATION-LITE-DB9/IP2LOCATION-LITE-DB9.BIN");
 
const app = express();
 
app.use(cors());
 
app.get('/ip2geo/:ipaddr', (req, res) => {
	const result = ip2loc.IP2Location_get_all(req.params.ipaddr);
	return res.json(result);
});
 
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);