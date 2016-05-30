# sander

mongoimport --db sander --collection projects --drop --file data/min/residential/arts-and-crafts.min.json &&
mongoimport --db sander --collection projects --file data/min/residential/asian-fusion.min.json &&
mongoimport --db sander --collection projects --file data/min/residential/contemporary-court.min.json &&
mongoimport --db sander --collection projects --file data/min/residential/contemporary-entry.min.json &&
mongoimport --db sander --collection projects --file data/min/residential/contemporary-yard.min.json &&
mongoimport --db sander --collection projects --file data/min/residential/country-estate.min.json &&
mongoimport --db sander --collection projects --file data/min/residential/formal-garden.min.json &&
mongoimport --db sander --collection projects --file data/min/residential/formal-gartenanlagen.min.json &&
mongoimport --db sander --collection projects --file data/min/residential/french-country.min.json &&
mongoimport --db sander --collection projects --file data/min/residential/front-entry-court.min.json &&
mongoimport --db sander --collection projects --file data/min/residential/front-entry-garden.min.json &&
mongoimport --db sander --collection projects --file data/min/residential/front-entry.min.json &&
mongoimport --db sander --collection projects --file data/min/residential/green-quad.min.json &&
mongoimport --db sander --collection projects --file data/min/residential/mediterranean-patio.min.json &&
mongoimport --db sander --collection projects --file data/min/residential/modern-classic.min.json &&
mongoimport --db sander --collection projects --file data/min/residential/neo-georgian.min.json &&
mongoimport --db sander --collection projects --file data/min/residential/outdoor-room.min.json &&
mongoimport --db sander --collection projects --file data/min/residential/oval-garden.min.json &&
mongoimport --db sander --collection projects --file data/min/residential/rock-garden.min.json &&
mongoimport --db sander --collection projects --file data/min/residential/rustic-oasis.min.json &&
mongoimport --db sander --collection projects --file data/min/residential/sunken-garden.min.json &&
mongoimport --db sander --collection projects --file data/min/residential/urban-deck.min.json &&
mongoimport --db sander --collection projects --file data/min/residential/zen-garden.min.json &&
mongoimport --db sander --collection projects --file data/min/commercial/condo-courtyard.min.json &&
mongoimport --db sander --collection projects --file data/min/commercial/condo-entrance.min.json &&
mongoimport --db sander --collection projects --file data/min/commercial/condo-rooftop.min.json &&
mongoimport --db sander --collection projects --file data/min/commercial/st-barts-church.min.json &&
mongoimport --db sander --collection projects --file data/min/commercial/symposium-cafe.min.json

mongoimport --headerline --type json --host $OPENSHIFT_MONGODB_DB_HOST --port $OPENSHIFT_MONGODB_DB_PORT --username $OPENSHIFT_MONGODB_DB_USERNAME --password $OPENSHIFT_MONGODB_DB_PASSWORD -d $OPENSHIFT_APP_NAME -c projects --drop --file data/min/residential/arts-and-crafts.min.json &&

mongoimport --headerline --type json --host $OPENSHIFT_MONGODB_DB_HOST --port $OPENSHIFT_MONGODB_DB_PORT --username $OPENSHIFT_MONGODB_DB_USERNAME --password $OPENSHIFT_MONGODB_DB_PASSWORD -d $OPENSHIFT_APP_NAME -c projects --file data/min/residential/asian-fusion.min.json

mongoimport --headerline --type json --host $OPENSHIFT_MONGODB_DB_HOST --port $OPENSHIFT_MONGODB_DB_PORT --username $OPENSHIFT_MONGODB_DB_USERNAME --password $OPENSHIFT_MONGODB_DB_PASSWORD -d $OPENSHIFT_APP_NAME -c projects --file data/min/residential/contemporary-court.min.json

mongoimport --headerline --type json --host $OPENSHIFT_MONGODB_DB_HOST --port $OPENSHIFT_MONGODB_DB_PORT --username $OPENSHIFT_MONGODB_DB_USERNAME --password $OPENSHIFT_MONGODB_DB_PASSWORD -d $OPENSHIFT_APP_NAME -c projects --file data/min/residential/contemporary-entry.min.json

mongoimport --headerline --type json --host $OPENSHIFT_MONGODB_DB_HOST --port $OPENSHIFT_MONGODB_DB_PORT --username $OPENSHIFT_MONGODB_DB_USERNAME --password $OPENSHIFT_MONGODB_DB_PASSWORD -d $OPENSHIFT_APP_NAME -c projects --file data/min/residential/contemporary-yard.min.json





mongoimport --headerline --type json --host $OPENSHIFT_MONGODB_DB_HOST --port $OPENSHIFT_MONGODB_DB_PORT --username $OPENSHIFT_MONGODB_DB_USERNAME --password $OPENSHIFT_MONGODB_DB_PASSWORD -d $OPENSHIFT_APP_NAME -c projects --file data/min/commercial/condo-courtyard.min.json