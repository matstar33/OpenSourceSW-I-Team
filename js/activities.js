// 활동 기록 페이지 인터랙션 (카테고리 필터 · 시간순/최신순 정렬 · 이미지 확대 모달)

(() => {
  const timelineList = document.getElementById('timelineList');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const sortToggleBtn = document.getElementById('sortToggleBtn');

  if (timelineList) {
    const items = Array.from(timelineList.querySelectorAll('.timeline-item'));
    let isDescending = false;

    // 카테고리 필터링
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const targetCategory = button.dataset.filter;

        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        items.forEach(item => {
          const matched = targetCategory === 'all' || item.dataset.category === targetCategory;
          item.hidden = !matched;
        });
      });
    });

    // 시간순 / 최신순 정렬 전환
    if (sortToggleBtn) {
      sortToggleBtn.addEventListener('click', () => {
        isDescending = !isDescending;
        sortToggleBtn.setAttribute('aria-pressed', String(isDescending));
        sortToggleBtn.textContent = isDescending
          ? '최신순 (최신 → 초기)'
          : '시간순 (초기 → 최신)';

        const sorted = [...items].sort((a, b) => {
          const orderA = Number(a.dataset.order);
          const orderB = Number(b.dataset.order);
          return isDescending ? orderB - orderA : orderA - orderB;
        });

        sorted.forEach(item => timelineList.appendChild(item));
      });
    }
  }

  // 활동 스냅샷 확대 모달
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const modalCaption = document.getElementById('modalCaption');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const photoTriggers = document.querySelectorAll('.photo-trigger');

  if (!modal || !modalImage || !modalCaption) return;

  let lastFocusedTrigger = null;

  const openModal = trigger => {
    const imgSrc = trigger.dataset.img;
    const caption = trigger.dataset.caption || '';
    if (!imgSrc) return;

    lastFocusedTrigger = trigger;
    modalImage.src = imgSrc;
    modalImage.alt = caption;
    modalCaption.textContent = caption;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    modalCloseBtn?.focus();
  };

  const closeModal = () => {
    modal.hidden = true;
    modalImage.src = '';
    document.body.style.overflow = '';
    lastFocusedTrigger?.focus();
  };

  photoTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => openModal(trigger));
  });

  modalCloseBtn?.addEventListener('click', closeModal);

  modal.addEventListener('click', event => {
    if (event.target instanceof HTMLElement && event.target.dataset.closeModal === 'true') {
      closeModal();
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !modal.hidden) {
      closeModal();
    }
  });
})();
