import {ModalRoot, ScreenSpinner, SplitCol, SplitLayout, View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/components.css';
import {memo, useCallback, useEffect, useMemo, useState} from 'react';

import {useGetOrCreateUser} from 'api/server';

import {MODALS_IDS} from 'modals/consts';
import {GetCertificatePage} from 'modals/GetCertificatePage';

import {PANELS_IDS} from 'panels/consts';
import {Loader} from 'panels/Loader';
import {Main} from 'panels/Main';
import {Сertificate} from 'panels/Сertificate';

export const App = memo(() => {
  const [activePanel, setActivePanel] = useState<PANELS_IDS>(PANELS_IDS.LOADER);
  const goToCertificate = useCallback(() => setActivePanel(PANELS_IDS.CERTIFICATE), []);
  const goToMain = useCallback(() => setActivePanel(PANELS_IDS.MAIN), []);

  const [activeModal, setActiveModal] = useState<MODALS_IDS | null>(null);
  const openGetCertificateModal = useCallback(() => setActiveModal(MODALS_IDS.GET_CERTIFICATE), []);
  const closeGetCertificateModal = useCallback(() => setActiveModal(null), []);

  const modal = useMemo(
    () => (
      <ModalRoot activeModal={activeModal}>
        <GetCertificatePage id={MODALS_IDS.GET_CERTIFICATE} onClose={closeGetCertificateModal} />
      </ModalRoot>
    ),
    [activeModal, closeGetCertificateModal],
  );

  const $user = useGetOrCreateUser();

  useEffect(() => {
    if ($user.isSuccess || $user.isError) {
      setActivePanel(PANELS_IDS.MAIN);
    }
  }, [$user.isError, $user.isSuccess]);

  const popout = useMemo(() => ($user.isFetching ? <ScreenSpinner size="large" /> : null), [$user.isFetching]);

  return (
    <SplitLayout modal={modal} popout={popout}>
      <SplitCol>
        <View id="view" activePanel={activePanel}>
          <Loader id={PANELS_IDS.LOADER} />

          <Main id={PANELS_IDS.MAIN} goToCertificate={goToCertificate} />

          <Сertificate
            id={PANELS_IDS.CERTIFICATE}
            goToMain={goToMain}
            openGetCertificateModal={openGetCertificateModal}
          />
        </View>
      </SplitCol>
    </SplitLayout>
  );
});

App.displayName = 'App';
