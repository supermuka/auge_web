**GLOSSÁRIO**

Item de Trabalho.

https://msdn.microsoft.com/en-us/library/bb668962.aspx


**ARTIGOS**

_Kanban_

https://leankit.com/learn/kanban/kanban-card/
https://kanbanize.com/kanban-resources/case-studies/kanban-work-breakdown-structure/

**ARQUITETURA - VISÃO DE IMPLEMENTAÇÃO**

pub run build_runner serve


_i18l_

pub run intl_translation:extract_to_arb --output-dir=lib\shared\i10n lib\shared\message\messages.dart --locale=en
pub run intl_translation:generate_from_arb --output-dir=lib\shared\i18n lib\shared\message\messages.dart lib\shared\i18n\intl_messages_pt_BR.arb lib\shared\i18n\intl_messages.arb


DOCKER

https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-debian-9

DEPLOY

pub run build_runner build -r -o web:build

/var/www/auge.levius.com..br/public_html





cd bin
dart --snapshot=augeapi.dart.snapshot augeapi.dart

https://github.com/dart-lang/sdk/wiki/Snapshots



ICONS credits:

https://www.iconfinder.com/iconsets/flag_set
https://www.iconfinder.com/search/?q=flag

CSS Press Circle
https://codepen.io/LFeh/pen/vGMJBN


**** Decision to Components instead Router

Google Inbox use component. New mails and foward don't have back browser navitage
Has better performance by pass param (data) from parent (master) screen.
Use to high related components and concepts.

--low-resources-mode


*** TRANSLATE

pub run intl_translation:extract_to_arb --output-dir=lib/messages/i18n lib/src/auth/auth_component.dart 

pub run intl_translation:extract_to_arb --output-dir=lib/messages/i18n lib/src/group/group_detail_component.dart 

pub run intl_translation:generate_from_arb --output-dir=lib/messages/i18n --generated-file-prefix=intl_ lib/src/auth/auth_component.dart lib/messages/i18n/intl_messages_en.arb lib/messages/i18n/intl_messages_pt_BR.arb
