(() => {
  'use strict';
  const escapeVCard = value => value.replace(/\\/g, '\\\\').replace(/\r\n|\r|\n/g, '\\n').replace(/;/g, '\\;').replace(/,/g, '\\,');
  // Fold content lines at 75 UTF-8 octets, including the continuation space.
  function foldLine(line) {
    const encoder = new TextEncoder();
    let result = '', bytes = 0;
    for (const character of line) {
      const length = encoder.encode(character).length;
      if (bytes + length > 75) { result += '\r\n '; bytes = 1; }
      result += character;
      bytes += length;
    }
    return result;
  }
  function createVCard() {
    return [
      'BEGIN:VCARD', 'VERSION:3.0', 'N:Cabanting;Josua;;;', 'FN:Josua Cabanting',
      'ORG:Testronix Network Solutions', 'TITLE:' + escapeVCard('Technical Consultant, IT'),
      'TEL;TYPE=CELL:+639171561712', 'EMAIL;TYPE=INTERNET,WORK:josua_cabanting@testronix.com.ph',
      'URL:https://www.testronix.ph/',
      'ADR;TYPE=WORK:;;' + escapeVCard('Unit 3107, East Tower, The Stiles Enterprise Plaza, Hippodromo St. cor. Theater Drive, Circuit Makati City') + ';Makati;Metro Manila;1200;Philippines',
      'END:VCARD'
    ].map(foldLine).join('\r\n') + '\r\n';
  }
  let toastTimer;
  function toast(message) {
    const element = document.getElementById('toast');
    element.textContent = message;
    element.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => element.classList.remove('show'), 4000);
  }
  document.getElementById('saveContact').addEventListener('click', () => {
    const blob = new Blob([createVCard()], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'Josua_Cabanting_Testronix.vcf';
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 30000);
    toast('Contact file ready — open it to add to Contacts.');
  });
})();
