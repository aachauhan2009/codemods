module.exports = function(file, api, options) {
    const j = api.jscodeshift;
    const root = j(file.source);
    const emptyState = j.emptyStatement();
    const comment = j.commentBlock(" eslint-disable ", false, true);
    const getFirstNode = () => root.find(j.Program).get("body", 0);
    emptyState.comments = [comment];
    getFirstNode().insertBefore(emptyState);
    return root.toSource();
  };
  
