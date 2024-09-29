
var Range = function(start, end, step) {
    if (typeof start !== 'number') {
      return null;
    }
  
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (step === undefined) {
      step = start <= end ? 1 : -1;
    }
  
    this.start = start;
    this.end = end;
    this.step = step;
  };
  
  Range.prototype.size = function() {
    if (this.step === 0) {
      return null;
    }
  
    var size = Math.floor(Math.abs((this.end - this.start) / this.step)) + 1;
  
    return size;
  };
  
  Range.prototype.each = function(callback) {
    if (this.step === 0) {
      return;
    }
  
    var current = this.start;
    while (this.step > 0 ? current <= this.end : current >= this.end) {
      callback(current);
      current += this.step;
    }
  };
  
  Range.prototype.includes = function(val) {
    if (this.step === 0) {
      return val === this.start;
    }
  
    return (
      (this.step > 0 && val >= this.start && val <= this.end) ||
      (this.step < 0 && val <= this.start && val >= this.end)
    );
  };
  
  