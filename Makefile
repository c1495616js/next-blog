#!make

run:
	@echo "Launching the client..."
	@docker-compose up

close:
	@echo "Closing the client..."
	@docker-compose down

purge:
	@echo "Purging client containers, images, networks, volumes..."
	@docker-compose down -v --rmi all

workspace:
	@echo "Shelling into the client..."
	@docker-compose exec client sh
