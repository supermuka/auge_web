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

c:\dart-sdk-dev.63\bin\pub run rpc:generate client -i lib/augeapi.dart -o ../auge/lib/client -p 8091


pub global activate discoveryapis_generator


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

DART update (linux)

$ sudo sh -c 'curl https://storage.googleapis.com/download.dartlang.org/linux/debian/dart_unstable.list > /etc/apt/sources.list.d/dart_unstable.list'
$ sudo apt-get update
$ sudo apt-get install dart



Decision to Components instead Router

Google Inbox use component. New mails and foward don't have back browser navitage
Has better performance by pass param (data) from parent (master) screen.
Use to high related components and concepts.


