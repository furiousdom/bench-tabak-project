docker-build-image:
	docker build -t bench-tabak-project .
docker-run-container:
	docker run --name bench-tabak-project-container \
	-p 2800:2800 \
	--env-file=.env \
	bench-tabak-project
docker-stop-container:
	docker stop bench-tabak-project-container
docker-remove-container:
	docker rm bench-tabak-project-container
