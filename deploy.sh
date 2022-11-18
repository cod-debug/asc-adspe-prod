docker stop asc_adspe_fe
docker rm asc_adspe_fe
docker rmi asc_adspe_fe_v1

docker build -t asc_adspe_fe_v1 .
docker run -d -p 1316:1316 --name asc_adspe_fe asc_adspe_fe_v1
docker image prune -f

