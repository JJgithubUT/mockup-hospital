function showTab(id, el) {
  document.querySelectorAll('.workspace').forEach(function(w) { w.classList.remove('active'); });
  document.querySelectorAll('.nav-tab').forEach(function(t) { t.classList.remove('active'); });
  document.getElementById('tab-' + id).classList.add('active');
  el.classList.add('active');
}