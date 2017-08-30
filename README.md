## Already-setup Ghost 1.8.0 for fast development

Owner set to ghost. login at (http://localhost:4096/ghost)[http://localhost:4096/ghost]

```
ghost-author@example.com
k2.digital
```

Should generate Facebook instant article ready rss feed after apply patch.
```
./apply-patch.sh
```

## Dev environment
Require NodeJS best latest LTS version  [NodeJS.org](https://nodejs.org/en/)
And pm2 for process manageing of dev server. `npm i -g pm2` if not installed
Then simply run `npm start` to run the server.  
Default endpoint at [http://localhost:4096](http://localhost:4096)

## Related Documentation:
[Ghost API Doc] (https://api.ghost.org/docs)
[Ghost Doc](https://docs.ghost.org/docs)
[Ghost Slack Channel](http://slack.ghost.org/)
[Ghost CN](http://www.ghostchina.com/)
[handlebarsjs](http://handlebarsjs.com/)