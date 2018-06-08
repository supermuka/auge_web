**GLOSSÁRIO**

Item de Trabalho.

https://msdn.microsoft.com/en-us/library/bb668962.aspx


**ARTIGOS**

_Kanban_

https://leankit.com/learn/kanban/kanban-card/
https://kanbanize.com/kanban-resources/case-studies/kanban-work-breakdown-structure/

**ARQUITETURA - VISÃO DE IMPLEMENTAÇÃO**

pub run build_runner serve
pub run rpc:generate client -i lib/server/augeapi.dart -o lib/client -p 8091

_i18l_

pub run intl_translation:extract_to_arb --output-dir=lib\shared\i10n lib\shared\message\messages.dart --locale=en
pub run intl_translation:generate_from_arb --output-dir=lib\shared\i18n lib\shared\message\messages.dart lib\shared\i18n\intl_messages_pt_BR.arb lib\shared\i18n\intl_messages.arb


**PARA FAZER**

>- Existem muitos CSS repetido. Entender uma forma de concentrar os CSS em um único arquivo padrão.


DEPLOY

pub run build_runner build -r -o web:build

cd bin
dart --snapshot=augeapi.dart.snapshot augeapi.dart

https://github.com/dart-lang/sdk/wiki/Snapshots


SSL

https://www.digitalocean.com/community/tutorials/how-to-create-a-ssl-certificate-on-apache-for-debian-8
https://certbot.eff.org/lets-encrypt/debianstretch-apache


ICONS credits:

https://www.iconfinder.com/iconsets/flag_set
https://www.iconfinder.com/search/?q=flag

CSS Press Circle
https://codepen.io/LFeh/pen/vGMJBN

